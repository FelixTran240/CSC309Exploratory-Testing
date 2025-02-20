/* HeaderTab.js this is for Delivery / Pickup buttons at the top NOTE: I have to edit this to have the logo and Name but good for practice */

/* Imports NOTE: I am using react native*/
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import cp from '../../assets/cp.png'


/* function HeaderTabs() */
/* const[activeTab] */
export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    /* The View tag: to see how it appears on the phone; this aligns the Delivery and Pickup buttons */
    /* The HeaderButton tag AKA const: makes the buttons */
    <View style={{flexDirection:'row', alignSelf: 'center'}}>
        {/* <Image source={cp} style={{width: 50, height: 50, }}/> */}

        <HeaderButton 
            text="Light"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <HeaderButton 
            text="Dark"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
      </View>
  )
}

/* HeaderButton const that takes in props */
/* props = it is used and has subcategories like "text" and "btnColor" and "textColor" */
/* TouchableOpacity tag: it makes a fading animation when clicked */
const HeaderButton = (props) => 
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black":"white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        
        
    }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={{color: props.activeTab === props.text ? "white":"black", fontSize: 15, fontWeight: "900"}}>
            {props.text}
            </Text>
    </TouchableOpacity>
