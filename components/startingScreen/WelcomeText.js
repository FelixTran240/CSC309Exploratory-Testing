import React from 'react'
import { Text, View } from 'react-native'

export default function WelcomeText() {
  return (
    <View>
        <Text 
            style={{
                color: '#3A913F',
                fontSize: 50,
                fontWeight: '500',
                fontFamily: "Chalkboard SE",
                alignSelf: 'center',
                marginTop: 75
            }}
        >
             Poly Meals
        </Text>
        <Text
            style={{
                color: '#3A913F',
                fontSize: 30,
                fontWeight: '200',
                fontFamily: "Chalkboard SE",
                alignSelf: 'center',
                marginTop: 10
            }}
        >
            Welcome Back!
        </Text>
    </View>
  )
}
