import 'react-native-gesture-handler'
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from "./navigations/navigate";

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <MyDrawer/>
      </NavigationContainer>
    
    );
  } 
}
