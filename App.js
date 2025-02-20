import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";

import Home from './screens/Home';
import RootNavigation from './navigation';
import Signup from './screens/Signup';
import Login from './screens/Login';

import SubCafes, { allSubCafes } from './components/Locations/SubCafes';
import Unfinished from './screens/Unfinished';
import StartingScreen from './screens/StartingScreen';
import Today from './screens/Today';
import VENUE from './screens/FOODS';

// If you want to see each screen individually change the tag below to one the thingies on top

export default function App() {
  return (
  <>
  <RootNavigation/>
  {/* <VENUE/> */}
  </>
);
}
