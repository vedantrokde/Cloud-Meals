import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import Navigation from "./src/infrastructure/navigation";

import { theme } from "./src/infrastructure/theme";

import { AuthContextProvider } from "./src/services/authentication/authentication.context";

const RootView = styled(View)`
	flex: 1;
`;

export default function App() {
	let [latoLoaded] = useLato({
		Lato_400Regular,
	});

	let [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const onLayoutRootView = useCallback(async () => {
		if (latoLoaded && oswaldLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [oswaldLoaded, latoLoaded]);

	if (!latoLoaded || !oswaldLoaded) {
		return null;
	}

	return (
		<RootView onLayout={onLayoutRootView}>
			<ThemeProvider theme={theme}>
				<AuthContextProvider>
					<Navigation />
				</AuthContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</RootView>
	);
}
