import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Orchid } from "./OrchidBox";
import HeartIcon from "./HeartIcon";

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
  const { orchid, isFavorite } = route.params;
  const { id, name, path, price, type } = orchid;

  return (
    <View style={styles.container}>
      <Image source={{ uri: path }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Price: {price}</Text>
        <Text style={styles.type}>Type: {type}</Text>
        <HeartIcon
          wrapperStyles={styles.icon}
          size={100}
          id={id}
          isFavorite={isFavorite}
        />
      </View>
      {/* Add additional details or functionality as needed */}
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
