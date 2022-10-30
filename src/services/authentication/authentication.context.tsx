import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../../auth.config";
import {
	loginRequest,
	logoutRequest,
	registerRequest,
} from "./authentication.service";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: any) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getUser = onAuthStateChanged(auth, (user) => {
			setIsLoading(true);
			if (user) {
				setUser(user);
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		});
		getUser();
	}, []);

	const onLogin = (email: string, password: string) => {
		setIsLoading(true);
		loginRequest(email, password)
			.then((userCredential) => {
				setUser(userCredential.user);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.toString());
				setIsLoading(false);
			});
	};

	const onRegister = (
		email: string,
		password: string,
		repeatedPassword: string
	) => {
		setIsLoading(true);
		if (password !== repeatedPassword) {
			setError("Error: Passwords do not match");
			return;
		}
		registerRequest(email, password)
			.then((userCredential) => {
				setUser(userCredential.user);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.toString());
				setIsLoading(false);
			});
	};
	const onLogout = () => {
		setIsLoading(true);
		logoutRequest()
			.then(() => {
				setUser(null);
				setError(null);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.toString());
				setIsLoading(false);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading,
				error,
				onLogin,
				onRegister,
				onLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
