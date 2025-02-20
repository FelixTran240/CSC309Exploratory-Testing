import { View } from 'react-native'
import React from 'react'

import HeaderLogin from '../components/LoginDetails/HeaderLogin'
import Buttons from '../components/LoginDetails/Buttons'
import FooterLogin from '../components/LoginDetails/FooterLogin'

export default function Login({ navigation }) {
  return (
    <View style={{ backgroundColor: "#63a94c", flex: 1 }}>
      <View style={{ backgroundColor: "#a0d78e" }}>  
        <HeaderLogin navigation={navigation} />
      </View>
      <View style={{ backgroundColor: "#a0d78e", padding: 15 }}>
        <Buttons navigation={navigation} />
      </View>
      <View style={{ backgroundColor: "#a0d78e", padding: 15 }}>
        <FooterLogin />
      </View>
    </View>
  )
}
