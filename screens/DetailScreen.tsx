import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useMemo } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Orchid, OrchidWithFavorite } from "./OrchidBox";
import HeartIcon from "./HeartIcon";
import { FavoriteState } from "./context";
import { MyContext } from "../App";

export type DetailParam = {
  orchid: Orchid;
  isFavorite?: boolean;
};

type ProductDetailProps = {
  route: {
    params: DetailParam;
  };
};

const DetailScreen = ({ route }: ProductDetailProps) => {
  const { dataListWithFavorite } = useContext<FavoriteState>(MyContext);
  const {
    orchid: { id },
  } = route.params;

  const orchid = useMemo<OrchidWithFavorite | undefined>(() => {
    if (!dataListWithFavorite) return;

    return dataListWithFavorite.find((item) => item.id === id);
  }, [dataListWithFavorite]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: orchid?.path }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{orchid?.name}</Text>
        <Text style={styles.price}>Price: {orchid?.price}</Text>
        <Text style={styles.type}>Type: {orchid?.type}</Text>
        <HeartIcon
          wrapperStyles={styles.icon}
          size={100}
          id={id}
          isFavorite={orchid?.isFavorite}
          needConfirm
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 350,
    height: 350,
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    marginBottom: 4,
  },
  type: {
    fontSize: 20,
  },
  icon: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default DetailScreen;
