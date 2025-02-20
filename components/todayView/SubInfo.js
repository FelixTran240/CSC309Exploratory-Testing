import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function SubInfo() {
  const [nutritionData, setNutritionData] = useState({
    protein: 0,
    fat: 0,
    carbs: 0
  });

  useEffect(() => {
    // Fetch data from the API
    const fetchNutritionData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tracker/spec/DaU/2025-02-18/1');
        // Sum up the nutrients (protein, fat, carbs) from the data
        const totalProtein = response.data.data.reduce((acc, item) => acc + item.protein, 0);
        const totalFat = response.data.data.reduce((acc, item) => acc + item.fat, 0);
        const totalCarbs = response.data.data.reduce((acc, item) => acc + item.carbs, 0);

        // Update state with the total values
        setNutritionData({
          protein: totalProtein,
          fat: totalFat,
          carbs: totalCarbs
        });
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
      }
    };

    fetchNutritionData();
  }, []);

  return (
    <View>
      <Text style={styles.infoText}>Protein: {nutritionData.protein}g</Text>
      <Text style={styles.infoText}>Fat: {nutritionData.fat}g</Text>
      <Text style={styles.infoText}>Carbohydrates: {nutritionData.carbs}g</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 20,
  },
});
