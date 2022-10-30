import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
	initializeAuth,
	getReactNativePersistence,
} from "firebase/auth/react-native";

const firebaseConfig = {
	apiKey: "AIzaSyBjDlFDYrv9O1dbZNk_kjNyk1d94kW3H7c",
	authDomain: "rn-cloud-meals.firebaseapp.com",
	projectId: "rn-cloud-meals",
	storageBucket: "rn-cloud-meals.appspot.com",
	messagingSenderId: "865251279418",
	appId: "1:865251279418:web:998defbfca6fdc408dab03",
	measurementId: "G-FNMFCFGVDD",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize auth
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
