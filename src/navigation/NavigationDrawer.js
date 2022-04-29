import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
