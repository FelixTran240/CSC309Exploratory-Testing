import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Unfinished from "./screens/Unfinished";
import StartingScreen from "./screens/StartingScreen";
import Today from "./screens/Today";
import Previous from "./screens/Previous";
import Settings from "./screens/Settings";
import Favorites from "./screens/Favorites";
import LOCATIONS from "./screens/LOCATIONS";
import FOODS from "./screens/FOODS";

export default function RootNavigation () {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartingScreen" screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Unfinished" component={Unfinished}/>
                <Stack.Screen name = "StartingScreen" component={StartingScreen}/>
                <Stack.Screen name = "Today" component={Today}/>
                <Stack.Screen name = "Previous" component={Previous}/>
                <Stack.Screen name = "Settings" component={Settings}/>
                <Stack.Screen name = "Favorites" component={Favorites}/>
                <Stack.Screen name = "LOCATIONS" component={LOCATIONS}/>
                <Stack.Screen name = "FOODS" component={FOODS}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}