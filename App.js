import React from "react";
import "react-native-gesture-handler";
import { Box, Text, UtilityThemeProvider } from "react-native-design-utility";
import { theme } from "./src/constants/theme";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigators/MainStackNavigator";

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </UtilityThemeProvider>
  );
};

export default App;
