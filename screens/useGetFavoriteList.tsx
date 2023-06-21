import React, { useEffect, useState } from "react";
import { getFavoriteList } from "../utils/store";

function useGetFavoriteList() {
  const [favoriteList, setFavoriteList] = useState<string[]>([]);

  useEffect(() => {
    getFavoriteList().then((data) => {
      setFavoriteList(data);
    });
  }, []);

  return { favoriteList };
}

export default useGetFavoriteList;
