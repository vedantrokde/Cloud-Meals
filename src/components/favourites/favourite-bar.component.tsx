import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.componet";

const FavouritesWrapper = styled(View)`
	padding: 10px;
`;

export default function FavouriteBar({ favourites, onNavigate }: any) {
	if (!favourites.length) {
		return <></>;
	}
	return (
		<FavouritesWrapper>
			<Spacer position="left" size="large">
				<Text variant="caption">Favourites</Text>
			</Spacer>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favourites.map((restaurant: any) => {
					const key = restaurant.name;
					return (
						<Spacer key={key} position="left" size="medium">
							<TouchableOpacity
								onPress={() =>
									onNavigate("RestaurantDetails", {
										restaurant: restaurant,
									})
								}
							>
								<CompactRestaurantInfo
									restaurant={restaurant}
								/>
							</TouchableOpacity>
						</Spacer>
					);
				})}
			</ScrollView>
		</FavouritesWrapper>
	);
}
