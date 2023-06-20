import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
interface Props {
  isFavorite?: boolean;
  wrapperStyles?: any;
  id: string;
  size?: number;
}

const HeartIcon = ({ isFavorite, id, wrapperStyles, size = 40 }: Props) => {
  const onClick = () => {
    // TODO: Implement favorite functionality
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
