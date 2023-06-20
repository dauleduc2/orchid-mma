import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen, { DetailParam } from "./DetailScreen";
import FavoriteList from "./FavoriteList";

type FavoriteTabParamList = {
  FavoriteList: undefined;
  Detail: DetailParam;
};

const FavoriteTab = createNativeStackNavigator<FavoriteTabParamList>();

export default function FavoriteTabScreen() {
  return (
    <FavoriteTab.Navigator>
      <FavoriteTab.Screen name="FavoriteList" component={FavoriteList} />
      <FavoriteTab.Screen name="Detail" component={DetailScreen} />
    </FavoriteTab.Navigator>
  );
}
