import React from "react";
import { SvgXml } from "react-native-svg";
import { theme } from "../../../infrastructure/theme";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
	Column,
	Icon,
	RestaurantCard,
	RestaurantCardCover,
	RowEnd,
	Title,
} from "./restaurant-info-card.styles";
import Favourite from "../../../components/favourites/favourite.component";

export default function RestaurantInfoCard({ restaurant = {} }: any) {
	const {
		name = "Some Restaurant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [`https://source.unsplash.com/random/300x200?food`],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
		placeId = "",
	} = restaurant;
	return (
		<RestaurantCard elevation={5}>
			<Favourite restaurant={restaurant} />
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Title
				title={name}
				subtitle={address}
				titleStyle={{ fontFamily: theme.fonts.heading }}
				subtitleStyle={{ fontFamily: theme.fonts.body }}
				right={(props) => (
					<Column>
						<RowEnd {...props}>
							{Array.from(new Array(Math.round(rating))).map(
								(_, index) => (
									<SvgXml
										key={`${placeId}-${index}`}
										xml={star}
										width={20}
										height={20}
									/>
								)
							)}
						</RowEnd>
						<Spacer position="top" size="medium">
							<RowEnd>
								{isOpenNow ? (
									<SvgXml xml={open} width={20} height={20} />
								) : isClosedTemporarily ? (
									<Text variant="error">
										CLOSED TEMPORARILY
									</Text>
								) : (
									<Text variant="body" />
								)}
								<Spacer position="left" size="large">
									<Icon source={{ uri: icon }} />
								</Spacer>
							</RowEnd>
						</Spacer>
					</Column>
				)}
			/>
		</RestaurantCard>
	);
}
