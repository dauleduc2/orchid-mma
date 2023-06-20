import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen, { DetailParam } from "./DetailScreen";
import OrchidList from "./OrchidList";

type FavoriteTabParamList = {
  OrchidList: undefined;
  Detail: DetailParam;
};

const OrchidTab = createNativeStackNavigator<FavoriteTabParamList>();

export default function OrchidTabScreen() {
  return (
    <OrchidTab.Navigator>
      <OrchidTab.Screen name="OrchidList" component={OrchidList} />
      <OrchidTab.Screen name="Detail" component={DetailScreen} />
    </OrchidTab.Navigator>
  );
}
