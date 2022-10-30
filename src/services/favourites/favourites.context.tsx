import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext<any>(null);

export const FavouritesContextProvider = ({ children }: any) => {
	const { user } = useContext(AuthContext);
	const [favourites, setFavourites] = useState<any>([]);

	const addFav = (restaurant: any) => {
		setFavourites([...favourites, restaurant]);
	};

	const removeFav = (restaurant: any) => {
		const tempFav = favourites.filter(
			(x: any) => x.placeId !== restaurant.placeId
		);
		setFavourites(tempFav);
	};

	const saveFav = async (value: any, uid: string) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
		} catch (e) {
			console.log("error saving:", e);
		}
	};

	const fetchFav = async (uid: string) => {
		try {
			const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
			if (jsonValue !== null) {
				setFavourites(JSON.parse(jsonValue));
			}
		} catch (e) {
			console.log("error restoring:", e);
		}
	};

	useEffect(() => {
		if (user && user.uid) fetchFav(user.uid);
	}, [user]);

	useEffect(() => {
		if (user && user.uid && favourites.length)
			saveFav(favourites, user.uid);
	}, [favourites, user]);

	return (
		<FavouritesContext.Provider
			value={{
				favourites,
				addFav,
				removeFav,
			}}
		>
			{children}
		</FavouritesContext.Provider>
	);
};
