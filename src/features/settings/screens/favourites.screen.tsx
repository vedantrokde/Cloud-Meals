import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Spacer } from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

const NoFavouritesArea = styled(SafeArea)`
	align-items: center;
	justify-content: center;
`;

export default function FavouritesScreen({ navigation }: any) {
	const { favourites } = useContext(FavouritesContext);
	return favourites.length ? (
		<SafeArea>
			<FlatList
				data={favourites}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("RestaurantDetail", {
									restaurant: item,
								})
							}
						>
							<Spacer position="bottom" size="large">
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	) : (
		<NoFavouritesArea>
			<Text variant="hint">No favourites yet!</Text>
		</NoFavouritesArea>
	);
}
