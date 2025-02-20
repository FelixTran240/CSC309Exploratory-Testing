import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import { Icon, Image } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { itemList, locationList } from '../DATA'

export default function SubCafes({navigation, parentVenue}) {
    const filteredLocations = locationList.filter((item) => item.ParentVenue === parentVenue);
  return (
    <>
    {filteredLocations.map((location, index) => (
    <TouchableOpacity
    key={index}   
    activeOpacity={1} 
    style={{marginBottom: 30}}
    onPress={()=>navigation.navigate("FOODS", 
        {parentLocation: location.Name,
        parentImage: location.Image,
        parentName: location.Name})} 
    >
    <View
    style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
        <SubCafeteria image={location.Image}/>
        <SubCafeteriaInfo name={location.Name}/>
        
    </View> 
    </TouchableOpacity>
    ))}
    </>
  )
}

const SubCafeteria = (props) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited)
    }

    return (
    <>
    <Image
    source= {props.image}
    style={{width: "100%", height: 180}}
    />
    <TouchableOpacity onPress={toggleFavorite} style={{position: 'absolute', right: 20, top: 20}}>
        <Ionicons name={isFavorited ? 'heart': 'heart-outline'} size={25} color='red'/>
    </TouchableOpacity>
    </>
    )
}
const SubCafeteriaInfo = (props) => (
    <View style={{
        marginTop: 10,
        flexDirection:'row'
    }}>
    <Text style={{fontSize: 20, fontWeight: "bold", fontFamily:'Helvetica'}}>{props.name}</Text>
    <Text style={{marginLeft: 100}}>*** Empty Space***</Text>
    </View>
)