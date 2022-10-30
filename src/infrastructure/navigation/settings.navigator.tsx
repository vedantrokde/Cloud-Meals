import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export default function SettingsNavigator() {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				headerMode: "screen",
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<SettingsStack.Screen
				options={{
					header: () => null,
				}}
				name="Settings"
				component={SettingsScreen}
			/>
			<SettingsStack.Screen
				name="Favourites"
				component={FavouritesScreen}
			/>
			<SettingsStack.Screen name="Camera" component={CameraScreen} />
		</SettingsStack.Navigator>
	);
}
