import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.componet";

export default function MapCallout({ restaurant }: any) {
	return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
}
