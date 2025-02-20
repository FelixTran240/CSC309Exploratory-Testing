import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

import insidevgs from '../../assets/vistaGrande/insidevgs.jpg'
import insideninteen from '../../assets/1901Market/insidenineteen.jpg'


const title = 'Dining Areas'

export default function SubCafeHeader({header}) {
  return (
    <View>
      <MainPicture headerImg={header}/>
      <Title title={title}/>
    </View>
  )
}

const MainPicture = (props) => 
    <Image source={props.headerImg} style={{width: '100%', height: 150}}/>


const Title = (props) => (
  <Text style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
      alignSelf:'center'
      }}
  >
      {props.title}
  </Text>
)

