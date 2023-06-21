import React, { useContext, useMemo } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import data from "../data.json";
import OrchidBox, { OrchidWithFavorite } from "./OrchidBox";
import { isFavorite } from "../utils/store";
import useGetFavoriteList from "./useGetFavoriteList";
import { AppContextProps, appContext } from "../App";

export default function OrchidList({
  navigation,
}: NativeStackScreenProps<any>) {
  const { orchidWithFavorite } = useContext<AppContextProps>(appContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={orchidWithFavorite}
        renderItem={({ item }) => (
          <OrchidBox
            data={item}
            isFavorite={item.isFavorite}
            navigation={navigation}
          />
        )}
        numColumns={1}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
});
