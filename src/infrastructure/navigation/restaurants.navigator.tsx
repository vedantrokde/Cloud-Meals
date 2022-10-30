import React from "react";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator();

export default function RestaurantsNavigator() {
	return (
		<RestaurantsStack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.ModalPresentationIOS,
			}}
		>
			<RestaurantsStack.Screen
				name="RestaurantList"
				component={RestaurantsScreen}
			/>
			<RestaurantsStack.Screen
				name="RestaurantDetails"
				component={RestaurantDetailScreen}
			/>
		</RestaurantsStack.Navigator>
	);
}
