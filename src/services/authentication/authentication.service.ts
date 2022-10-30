import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../../../auth.config";

export const loginRequest = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

export const logoutRequest = () => {
	return signOut(auth);
};
