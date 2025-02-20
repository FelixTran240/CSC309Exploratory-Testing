import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Image } from 'react-native-elements'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-native'
import {LoginId} from '../LoginDetails/Buttons'
import Login from '../../screens/Login'
import { Alert } from 'react-native'

//fetches id from the api
const fetchFoodListById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/items/util/getall/${id}`);
    console.log('Fetched list:', response.data.data);
    return response.data.data; // Return the data array directly
  } catch (error) {
    console.error('Error fetching list', error);
    return [];
  }
};

const fetchIdByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/locations/util/getByName/${name}`);
    console.log('Fetched id:', response.data.data.id);
    return response.data.data.id; // Return the data array directly
  } catch (error) {
    console.error('Error fetching id', error);
    return [];
  }
}

// This component will be used to display the menu items
export default function MenuItem({parentLocation}) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const getFoodList = async () => {
      const id = await fetchIdByName(parentLocation);
      const data = await fetchFoodListById(id); // Replace 1 with the actual ID you want to fetch
      console.log('Fetched list:', data);//check if the data is being fetched
      setFoodList(data);
    };

    getFoodList();
  }, []);

  console.log('Current foodList state:', foodList);//double check if the data is being fetched

  const toggleDropdown = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {foodList.map((food, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => toggleDropdown(index)}>
                <View style={styles.menuItemStyle}>
                  <FoodInfo title={food.item_name} />
                  <Ionicons
                    name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color='black'
                  />
                </View>
              </TouchableOpacity>
              {expandedIndex === index && (
                <View style={styles.dropdownStyle}>
                  <Text style={{ color: 'black' }}>Calories: {food.calories}</Text>
                  <Text style={{ color: 'black' }}>Protein: {food.protein}</Text>
                  <Text style={{ color: 'black' }}>Fat: {food.fat}</Text>
                  <Text style={{ color: 'black' }}>Carbs: {food.carbs}</Text>
                  <Button title="Add to Nutrition" onPress={async () => {
  try {
    const response = await axios.post(`http://localhost:3000/api/tracker/spec/add`, {
      item_id: food.id,
      day: '2025-02-18',
      user_id: LoginId
    })
    console.log(response.data.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}} />

                </View>
              )}
              <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
            </View>
          ))}
        </ScrollView>
      );
    }


  const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
      <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
  );

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',

    },
    dropdownStyle: {
      padding: 10,
      backgroundColor: '#f8f8f8',
    },
})