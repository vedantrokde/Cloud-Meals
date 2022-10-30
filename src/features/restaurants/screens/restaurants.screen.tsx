import React, { useContext, useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";
import FadeInView from "../../../components/animations/fade.animations";
import FavouriteBar from "../../../components/favourites/favourite-bar.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Search from "../components/search.component";

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

const LoadingContainer = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const RestaurantCardWrapper = styled(TouchableOpacity)`
	margin: ${(props) => props.theme.space[2]}
		${(props) => props.theme.space[3]};
`;

export default function RestaurantsScreen({ navigation }: any) {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);
	const [isToggled, setIsToggled] = useState(false);
	return (
		<SafeArea>
			<Search
				isToggled={isToggled}
				onToggle={() => setIsToggled(!isToggled)}
			/>
			{isToggled && (
				<FavouriteBar
					favourites={favourites}
					onNavigate={navigation.navigate}
				/>
			)}
			{isLoading && (
				<LoadingContainer>
					<Loading
						size={50}
						animating={true}
						color={Colors.blue300}
					/>
				</LoadingContainer>
			)}
			<FlatList
				data={restaurants}
				renderItem={({ item }: any) => (
					<RestaurantCardWrapper
						onPress={() =>
							navigation.navigate("RestaurantDetails", {
								restaurant: item,
							})
						}
					>
						<FadeInView>
							<RestaurantInfoCard restaurant={item} />
						</FadeInView>
					</RestaurantCardWrapper>
				)}
				keyExtractor={(item: any) => item.name}
				removeClippedSubviews={true}
			/>
		</SafeArea>
	);
}
