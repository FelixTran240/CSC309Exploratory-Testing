import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs({ navigation, style }) {
  return (
    <View 
    style={{
      ...{
        flexDirection:'row',
        margin: 10,
        marginHorizontal:30,
        justifyContent:'space-between',
      },
      ...style
        }}>
      
      <Icon icon="home" text="Home" navigation={navigation} screen="StartingScreen"/>
      <Icon icon="wrench" text="Settings" navigation={navigation} screen="Settings"/>
      <Icon icon="plus-circle" text="Add" navigation={navigation} screen="Home"/>
      <Icon icon="heart" text="Liked" navigation={navigation} screen="Favorites"/>
      <Icon icon="user" text="Account" navigation={navigation} screen="Login"/>
    </View>
  )
}

const Icon = ({navigation, ...props}) => (
  <TouchableOpacity  onPress={() => navigation.navigate(props.screen)}>
  <View>
  <FontAwesome5 
  name={props.icon}
  size={25}
  style={{
    marginBottom: 3,
    marginRight:3,
    alignSelf: "center",
  }}
  />
  <Text>{props.text}</Text>
  </View>
  </TouchableOpacity>
)
