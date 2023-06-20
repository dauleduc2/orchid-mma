import React from "react";
import { Button, Text, View, FlatList, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import data from "../data.json";
import OrchidBox, { Orchid } from "./OrchidBox";

export default function OrchidList({
  navigation,
}: NativeStackScreenProps<any>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.orchids as Orchid[]}
        renderItem={({ item }) => (
          <OrchidBox data={item} isFavorite={true} navigation={navigation} />
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
