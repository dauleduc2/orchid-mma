import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrchidTabScreen from "./screens/OrchidTab";
import FavoriteTabScreen from "./screens/FavoriteTab";
import Icon from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import data from "./data.json";
import { OrchidWithFavorite } from "./screens/OrchidBox";
import useGetFavoriteList from "./screens/useGetFavoriteList";
import { isFavorite } from "./utils/store";

const Tab = createBottomTabNavigator();

export interface AppContextProps {
  orchidWithFavorite: OrchidWithFavorite[];
  setOrchidWithFavorite?: React.Dispatch<
    React.SetStateAction<OrchidWithFavorite[]>
  >;
}
export const appContext = React.createContext<AppContextProps>({
  orchidWithFavorite: [],
});

export default function App() {
  const { favoriteList } = useGetFavoriteList();
  const [orchidWithFavorite, setOrchidWithFavorite] = React.useState<
    OrchidWithFavorite[]
  >([]);

  const dataWithFavorite = React.useMemo(
    () =>
      data.orchids.map<OrchidWithFavorite>((orchid) => ({
        ...orchid,
        isFavorite: isFavorite(favoriteList, orchid.id),
      })),
    [data, favoriteList]
  );

  React.useEffect(() => {
    setOrchidWithFavorite(dataWithFavorite);
  }, [dataWithFavorite]);

  return (
    <appContext.Provider value={{ orchidWithFavorite, setOrchidWithFavorite }}>
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
    </appContext.Provider>
  );
}
