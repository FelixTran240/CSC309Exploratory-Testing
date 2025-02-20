import { View, Text } from 'react-native'
import React from 'react'
import calpoly from '../../assets/calpolyarielshot.jpg'
import { Image } from 'react-native-elements'

export default function HeaderSignup() {
  return (
    <View>
      <LoginBackground />
      <Text 
        style={{ 
          fontSize: 75, 
          fontWeight: '500', 
          fontFamily: 'Helvetica', 
          marginTop: 20, 
          marginLeft: 30 
        }}
      >
        Signup
      </Text>
    </View>
  )
}

const LoginBackground = () => (
  <Image 
    source={calpoly} 
    style={{ width: '100%', height: 200, opacity: 0.75 }} 
  />
)
