import React, { useEffect, useState } from "react";
import { getFavoriteList, isFavorite } from "../utils/store";
import data from "../data.json";
import { OrchidWithFavorite } from "./OrchidBox";

function useGetFavoriteList() {
  const [favoriteList, setFavoriteList] = useState<string[]>([]);

  useEffect(() => {
    getFavoriteList().then((data) => {
      setFavoriteList(data);
    });
  }, []);

  const dataWithFavorite = React.useMemo(
    () =>
      data.orchids.map<OrchidWithFavorite>((orchid) => ({
        ...orchid,
        isFavorite: isFavorite(favoriteList, orchid.id),
      })),
    [data, favoriteList]
  );

  return { favoriteList, setFavoriteList, dataWithFavorite };
}

export default useGetFavoriteList;
