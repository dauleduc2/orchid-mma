import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrchidTabScreen from "./screens/OrchidTab";
import FavoriteTabScreen from "./screens/FavoriteTab";
import Icon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { OrchidWithFavorite } from "./screens/OrchidBox";
import useGetFavoriteList from "./screens/useGetFavoriteList";
import { FavoriteState } from "./screens/context";
const Tab = createBottomTabNavigator();

export const MyContext = React.createContext<FavoriteState>({
  favoriteList: [],
  dataListWithFavorite: [],
});

export default function App() {
  const [dataListWithFavorite, setDataListWithFavorite] = React.useState<
    OrchidWithFavorite[]
  >([]);
  const { dataWithFavorite, favoriteList, setFavoriteList } =
    useGetFavoriteList();

  React.useEffect(() => {
    setDataListWithFavorite(dataWithFavorite);
  }, [dataWithFavorite]);
  return (
    <MyContext.Provider
      value={{
        dataListWithFavorite,
        setDataListWithFavorite,
        favoriteList,
        setFavoriteList,
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Orchid") {
                return <Icon name="flower" size={size} color={color} />;
              } else if (route.name === "Favorite") {
                return (
                  <MaterialIcons
                    name="favorite-outline"
                    size={size}
                    color={color}
                  />
                );
              }
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Orchid" component={OrchidTabScreen} />
          <Tab.Screen name="Favorite" component={FavoriteTabScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}
