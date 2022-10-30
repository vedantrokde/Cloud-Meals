import { createContext, useState, useEffect, useMemo, useContext } from "react";
import { LocationContext } from "../location/location.context";
import {
	restaurantsRequest,
	restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext<any>(null);

export const RestaurantsContextProvider = ({ children }: any) => {
	const [restaurants, setRestaurants] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const { location } = useContext(LocationContext);

	const retrieveRestuarants = (coordinates: string) => {
		setIsLoading(true);
		setRestaurants([]);

		setTimeout(() => {
			restaurantsRequest(coordinates)
				.then(restaurantsTransform)
				.then((data: any) => {
					setIsLoading(false);
					setRestaurants(data);
				})
				.catch((err: any) => {
					setIsLoading(false);
					setError(err);
				});
		}, 2000);
	};

	useEffect(() => {
		if (location) retrieveRestuarants(`${location?.lat},${location?.lng}`);
	}, [location]);

	return (
		<RestaurantsContext.Provider
			value={{
				restaurants,
				isLoading,
				error,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};
