import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


export default function SearchBar() {

  return (
    <View style={{marginTop:15, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
       placeholder='Search'
       styles={{
            textInput:{
                backgroundColor:"#eee",
                borderRadius:20,
                fontWeight:"700",
                marginTop:7,
            },
            textInputContainer:{
                backgroundColor: "#eee",
                borderRadius:50,
                flexDirection:"row",
                alignItems:"center",
                marginRight: 10,
            },
       }}

        renderLeftButton={() => (
            <View style={{ marginLeft: 10 }}>
                <Ionicons name ="search-sharp" size={24}/>
            </View>
        )}
        renderRightButton={()=>(
            <View
                style={{
                    flexDirection: "row",
                    marginRight: 8,
                    backgroundColor: "white",
                    padding: 9,
                    borderRadius: 30,
                    alignItems: "center",
            }}>
                <AntDesign
                name="clockcircle"
                size={11}
                style={{marginRight:6}}
                 />
                <Text>Search</Text>
            </View>
        )}

       />
    </View>
  )
}
