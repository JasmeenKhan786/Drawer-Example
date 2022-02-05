import React from "react";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../screens/Profile";
import Aboutus from "../screens/Aboutus";
import Home from "../screens/Home";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}   options={{
          drawerIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={ 'home'}
                  color={color}
                  size={25}
                />
              </View>
            );
          },
        }}/>
      <Drawer.Screen name="Aboutus" component={Aboutus} options={{
          drawerIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={ 'home'}
                  color={color}
                  size={25}
                />
              </View>
            );
          },
        }}/>
      <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={ 'home'}
                  color={color}
                  size={25}
                />
              </View>
            );
          },
        }}/>
    </Drawer.Navigator>
  );
}
export default MyDrawer;
