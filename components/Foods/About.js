import { View, Text } from 'react-native'
import React from 'react'

import brunch from '../../assets/vistaGrande/brunch.jpg'
import { Image } from 'react-native-elements'

const title = 'Brunch'
const description = 'This is the description keep me if you want'

export default function About({parentLocation, parentName, parentImage}) {
  return (
    <View>
      <CafeImage image={parentImage}/>
      <CafeTitle title={parentName}/>
      {/* <CafeDescription description={description}/> */}
    </View>
  )
}

const CafeImage = (props) => (
    <Image source={props.image} style={{width:"100%", height: 180}}/> 
)

const CafeTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
        }}
    >
        {props.title}
    </Text>
)

const CafeDescription = (props) => (
    <Text style={{
        fontSize:15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15
        }}
    >
    {props.description}</Text>
)
