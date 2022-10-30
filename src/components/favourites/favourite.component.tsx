import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	top: 25px;
	right: 25px;
	z-index: 9;
`;

export default function Favourite({ restaurant }: any) {
	const { favourites, addFav, removeFav } = useContext(FavouritesContext);

	const isFavourite = favourites.find(
		(r: any) => r.placeId === restaurant.placeId
	);

	return (
		<FavouriteButton
			onPress={() =>
				!isFavourite ? addFav(restaurant) : removeFav(restaurant)
			}
		>
			<AntDesign
				name={isFavourite ? "heart" : "hearto"}
				size={24}
				color={isFavourite ? "red" : "white"}
			/>
		</FavouriteButton>
	);
}
