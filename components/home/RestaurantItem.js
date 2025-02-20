import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import newmarket from '../../assets/1901.jpg'
import vgs from '../../assets/vg.jpg'
import pcv from '../../assets/pcv.jpg'
import campusmarket from '../../assets/campusmarket.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'
import LOCATIONS from '../../screens/LOCATIONS'
import { venueList } from '../DATA'


export default function RestaurantItem({ navigation, ...props }) {
    

  return (
    <>
    {venueList.map((venue, index) => (
    <TouchableOpacity 
    key={index} 
    activeOpacity={1} 
    style={{marginBottom: 30}} 
    onPress={()=> navigation.navigate('LOCATIONS', {parentVenue: venue.Name, header: venue.SubImage})}>
    <View
    
    style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
        <Cafeteria image={venue.Image}/>
        <CafeteriaInfo name={venue.Name}/>
    </View> 
    </TouchableOpacity>
    ))}
    </>
  )
  
}

const Cafeteria = (props) => {
    return (
    <>
    <Image 
    source= {props.image}
    style={{width: "100%", height: 180}}
    />
    </>
);
};

const CafeteriaInfo = (props) => (

    <View style={{
        marginTop: 10,
        alignItems:'center'
    }}>
    <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
    </View>
)

