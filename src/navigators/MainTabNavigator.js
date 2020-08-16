import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListenNowScreen from "../components/listenNow/ListenNowScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../components/search/SearchScreen";
import LibraryScreen from "../components/library/LibraryScreen";
import PodcastDetailsScreen from "../components/podcastDetails/PodcastDetailsScreen";

const MainTab = createBottomTabNavigator();

const ListenNowStack = createStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        options={{ title: "Listen Now" }}
        name="ListenNoow"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetailsScreen}
        options={{ headerTitle: "" }}
      />
    </SearchStack.Navigator>
  );
};

const LibraryStack = createStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Library" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{ title: "Listen Now" }}
        name="ListenNOww"
        component={ListenNowStackNavigator}
      />

      <MainTab.Screen name="Library" component={LibraryStackNavigator} />
      <MainTab.Screen name="Search" component={SearchStackNavigator} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
