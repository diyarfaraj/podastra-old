import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListenNowScreen from "../components/listenNow/ListenNowScreen";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Listen Now" component={ListenNowScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
