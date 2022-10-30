import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantsNavigator from "./restaurants.navigator";
import MapScreen from "../../features/map/screens/map.screen";
import SettingsNavigator from "./settings.navigator";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
	const createScreenOptions:
		| BottomTabNavigationOptions
		| ((props: {
				route: RouteProp<ParamListBase, string>;
				navigation: any;
		  }) => BottomTabNavigationOptions)
		| undefined = ({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			const iconName: React.ComponentProps<typeof Ionicons>["name"] =
				route.name === "Restaurants"
					? "ios-restaurant"
					: route.name === "Map"
					? "ios-map"
					: route.name === "Setting"
					? "ios-settings"
					: "ios-help";

			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
		headerShown: false,
	});
	return (
		<FavouritesContextProvider>
			<LocationContextProvider>
				<RestaurantsContextProvider>
					<Tab.Navigator screenOptions={createScreenOptions}>
						<Tab.Screen
							name="Restaurants"
							component={RestaurantsNavigator}
						/>
						<Tab.Screen name="Map" component={MapScreen} />
						<Tab.Screen
							name="Setting"
							component={SettingsNavigator}
						/>
					</Tab.Navigator>
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</FavouritesContextProvider>
	);
}
