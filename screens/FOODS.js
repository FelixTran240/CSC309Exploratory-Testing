import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'

import MenuItem from '../components/Foods/MenuItems'
import About from '../components/Foods/About';

export default function FOODS({route, navigation}) {
  const { parentLocation } = route.params || {}; // Safely extract parentVenue
  const { parentImage } = route.params || {}; // Safely extract parentVenue
  const { parentName } = route.params || {}; // Safely extract parentVenue

  return (
    <SafeAreaView>
        <About parentImage={parentImage} parentName={parentName}/>
    <Divider width={1.8} style={{ marginVertical: 10 }}/>
        <MenuItem parentLocation={parentLocation}/>
    </SafeAreaView>
  )
}
