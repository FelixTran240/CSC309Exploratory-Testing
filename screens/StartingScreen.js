import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import WelcomeText from '../components/startingScreen/WelcomeText'
import SelectView from '../components/startingScreen/SelectView'
import SubText from '../components/startingScreen/SubText'
import SelectView2 from '../components/startingScreen/SelectView2'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

export default function StartingScreen({navigation}) {
  return (
    // View: The Container
    <View style={{ backgroundColor: "f0f0f0", flex: 1 }}>
        <View>
            {/* Subcomponent: Welcome + Go to */}
            <WelcomeText/>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
          <View>
              {/* Today Image + Today Text */}
              <SelectView navigation={navigation}/>
          </View>
          {/* Removed the horizontal line */}
          <View>
              {/* Subcomponent: Previous Image + Previous Text */}
              <SelectView2 navigation={navigation}/>
          </View>
        </View>
        <View style={{backgroundColor: '#f0f0f0', marginTop: 257}}>
          {/* Barley Visible Divider between Container & BottomTabs */}
          <Divider width={1}/>
          {/* Imported Bottom Tabs from Home Folder */}
          <BottomTabs style={{backgroundColor: 'f0f0f0'}} navigation={navigation}/>
          <View style={{backgroundColor: 'f0f0f0', height: 100}}></View>
        </View>
    </View>
  );
}