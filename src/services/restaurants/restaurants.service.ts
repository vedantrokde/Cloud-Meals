import camelize from "camelize-ts";
import { mockImages, mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject("not found");
		}
		resolve(mock);
	});
};

export const restaurantsTransform = ({ results }: any) => {
	const mappedData = results.map((restaurant: any) => ({
		...restaurant,
		address: restaurant?.vicinity,
		isOpenNow:
			restaurant?.opening_hours && restaurant?.opening_hours?.open_now,
		isClosedTemporarily:
			restaurant.business_status === "CLOSED_TEMPORARILY",
		photos: restaurant?.photos.map(
			(p: any) =>
				mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
		),
	}));
	return camelize(mappedData);
};
