import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../services/authentication/authentication.context";
import AccountNavigator from "./account.navigator";
import AppNavigator from "./app.navigator";

export default function Navigation() {
	const { isAuthenticated } = useContext(AuthContext);
	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
		</NavigationContainer>
	);
}
