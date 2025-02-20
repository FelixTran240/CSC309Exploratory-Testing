import { View } from 'react-native'
import React from 'react'
import HeaderSignup from '../components/SignupDetails/HeaderSignup'
import ButtonsSignup from '../components/SignupDetails/ButtonsSignup'

export default function Signup({ navigation }) { 
  return (
    <View style={{ backgroundColor: "#63a94c", flex: 1 }}>
      <View style={{ backgroundColor: "#a0d78e" }}>  
        <HeaderSignup />
      </View>
      <View style={{ backgroundColor: "#a0d78e", padding: 15 }}>
        <ButtonsSignup navigation={navigation} />
      </View>
    </View>
  )
}
