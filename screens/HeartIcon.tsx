import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Alert, TouchableOpacity } from "react-native";
import { addFavorite, removeFavorite } from "../utils/store";
import { FavoriteState } from "./context";
import { MyContext } from "../App";
interface Props {
  isFavorite?: boolean;
  wrapperStyles?: any;
  id: string;
  size?: number;
  needConfirm?: boolean;
}

const HeartIcon = ({
  isFavorite,
  id,
  wrapperStyles,
  size = 40,
  needConfirm = false,
}: Props) => {
  const { setDataListWithFavorite, setFavoriteList } =
    useContext<FavoriteState>(MyContext);
  const onToggleFavorite = () => {
    if (isFavorite) {
      setFavoriteList?.((prev) => {
        return prev.filter((item) => item !== id);
      });
      setDataListWithFavorite?.((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isFavorite: false,
            };
          }
          return item;
        });
      });
      return removeFavorite(id);
    }

    setFavoriteList?.((prev) => {
      return [...prev, id];
    });
    setDataListWithFavorite?.((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: true,
          };
        }
        return item;
      });
    });
    return addFavorite(id);
  };

  const onConfirm = () => {
    if (isFavorite) {
      return Alert.alert(
        "Are your sure?",
        "Are you sure to unfavorite this orchid?",
        [
          {
            text: "Yes",
            onPress: () => {
              onToggleFavorite();
            },
          },
          {
            text: "No",
          },
        ]
      );
    }

    return onToggleFavorite();
  };

  return (
    <TouchableOpacity
      style={wrapperStyles}
      onPress={needConfirm ? onConfirm : onToggleFavorite}
    >
      <Icon
        name={isFavorite ? "favorite" : "favorite-border"}
        style={{ fontSize: size }}
        color={isFavorite ? "#e91e63" : "grey"}
      />
    </TouchableOpacity>
  );
};

export default HeartIcon;
