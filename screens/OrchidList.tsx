import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import OrchidBox from "./OrchidBox";
import { FavoriteState } from "./context";
import { MyContext } from "../App";

type Props = NativeStackScreenProps<any>;

export default function OrchidList({ navigation }: Props) {
  const { dataListWithFavorite } = useContext<FavoriteState>(MyContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={dataListWithFavorite}
        renderItem={({ item }) => (
          <OrchidBox
            data={item}
            isFavorite={item.isFavorite}
            navigation={navigation}
            needConfirm
          />
        )}
        numColumns={1}
        keyExtractor={(item) => {
          return item.id;
        }}
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
