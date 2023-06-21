import React from "react";
import { OrchidWithFavorite } from "./OrchidBox";

export interface FavoriteState {
  dataListWithFavorite: OrchidWithFavorite[];
  setDataListWithFavorite?: React.Dispatch<
    React.SetStateAction<OrchidWithFavorite[]>
  >;
  favoriteList: string[];
  setFavoriteList?: React.Dispatch<React.SetStateAction<string[]>>;
}
