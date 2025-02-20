import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import calpoly from '../../assets/calpolyarielshot.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HeaderLogin({ navigation }) {
  return (
    <View>
      <LoginBackground navigation={navigation} />
      <Text 
        style={{ 
          fontSize: 75, 
          fontWeight: '500', 
          fontFamily: 'Helvetica', 
          marginTop: 50, 
          marginLeft: 30 
        }}
      >
        Login
      </Text>
    </View>
  )
}

const LoginBackground = ({ navigation }) => (
  <View> 
    <Image 
      source={calpoly} 
      style={{ width: '100%', height: 200, opacity: 0.75 }} 
    />
    <TouchableOpacity 
      style={{ position: 'absolute', top: 40, left: 20 }} 
      onPress={() => navigation.navigate('Home')}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='caret-back' size={50} color='black' />
      </View>
    </TouchableOpacity>
  </View>
)
