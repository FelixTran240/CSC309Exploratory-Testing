import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Divider } from 'react-native-elements'
import SubCafes from '../components/Locations/SubCafes'
import BottomTabs from '../components/home/BottomTabs'
import SubCafeHeader from '../components/Locations/SubCafeHeader'

export default function LOCATIONS({route, navigation}) {
    const { parentVenue } = route.params || {}; // Safely extract parentVenue
    const { header } = route.params || {}; // Safely extract parentVenue
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex:1 }}>
      <View>
        <SubCafeHeader header={header}/>
      </View>
    <Divider width={1.8} style={{ marginVertical: 10 }}/>
      <ScrollView showsVerticalScrollIndicator={true}>
        <SubCafes parentVenue={parentVenue} navigation={navigation}/>
      </ScrollView>
    <Divider width ={1}/>
      <BottomTabs navigation={navigation}/>
    </SafeAreaView>
  )
}
