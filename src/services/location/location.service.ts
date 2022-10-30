import camelize from "camelize-ts";
import { locations, locationType } from "./location.mock";

export const locationRequest = (searchTerm: locationType) => {
	return new Promise((resolve, reject) => {
		const locationMock = locations[searchTerm];
		if (!locationMock) {
			reject("not found");
		}
		resolve(locationMock);
	});
};

export const locationTransform = (result: any) => {
	const formattedResponse = <any>camelize(result);
	const { geometry = {} } = formattedResponse?.results[0];
	const { lat, lng } = geometry.location;

	return { lat, lng, viewport: geometry.viewport };
};
