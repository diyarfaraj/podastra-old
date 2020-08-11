import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return <MainTab.Navigator></MainTab.Navigator>;
};

export default MainTabNavigator;
