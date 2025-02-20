import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import React, { useState } from 'react'

import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem from '../components/home/RestaurantItem'
import BottomTabs from '../components/home/BottomTabs'
import SideBar  from '../components/Sidebar/sidebar'



export default function Home({navigation}) {
  const [activeTab, setActiveTab] = useState("Light");

  return (
    <SafeAreaView style={{ backgroundColor: activeTab === "Light" ? "#eee" : "#333", flex:1 }}>
        <View style={{ backgroundColor: activeTab === "Light" ? "white" : "black", padding: 15 }}>
            {/* <SideBar/> */}
            {/* <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/> */}
            <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories/>
          <RestaurantItem navigation={navigation}/>
        </ScrollView>
        <Divider width ={1}/>
        <BottomTabs navigation={navigation}/>
    </SafeAreaView>
  )
}
