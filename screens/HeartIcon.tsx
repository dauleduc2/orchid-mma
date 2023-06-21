import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
import { addFavorite, removeFavorite } from "../utils/store";
import { appContext, AppContextProps } from "../App";
interface Props {
  isFavorite?: boolean;
  wrapperStyles?: any;
  id: string;
  size?: number;
}

const HeartIcon = ({ isFavorite, id, wrapperStyles, size = 40 }: Props) => {
  const { orchidWithFavorite, setOrchidWithFavorite } = useContext(appContext);

  const currentOrchid = orchidWithFavorite?.find((item) => item.id === id);

  const onClick = () => {
    if (isFavorite) {
      console.log(isFavorite);
      setOrchidWithFavorite?.((prev) => {
        return prev.filter((item) => item.id !== id);
      });
      return removeFavorite(id);
    }
    if (currentOrchid)
      setOrchidWithFavorite?.((prev) => [...prev, currentOrchid]);

    return addFavorite(id);
  };
  return (
    <TouchableOpacity style={wrapperStyles} onPress={onClick}>
      <Icon
        name={isFavorite ? "favorite" : "favorite-border"}
        style={{ fontSize: size }}
        color={isFavorite ? "#e91e63" : "grey"}
      />
    </TouchableOpacity>
  );
};

export default HeartIcon;
