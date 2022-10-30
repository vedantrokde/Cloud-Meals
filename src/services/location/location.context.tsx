import React, { createContext, useState, useEffect } from "react";
import { locationType } from "./location.mock";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext<any>(null);

export const LocationContextProvider = ({ children }: any) => {
	const [keyword, setKeyword] = useState("San Francisco");
	const [location, setLocation] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword: string) => {
		setIsLoading(true);
		setKeyword(searchKeyword);
	};

	useEffect(() => {
		if (!keyword.length) return;
		locationRequest(keyword.toLowerCase() as locationType)
			.then(locationTransform)
			.then((result) => {
				setIsLoading(false);
				setLocation(result);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			});
	}, [keyword]);

	return (
		<LocationContext.Provider
			value={{
				isLoading,
				error,
				location,
				search: onSearch,
				keyword,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};
