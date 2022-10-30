import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform, View, Image } from "react-native";

import { Text } from "../typography/text.component";
import { StyledComponent } from "styled-components";

const CompactImage = styled(Image)`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`;

const CompactWebview = styled(WebView)`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`;

const Item = styled(View)`
	padding: 10px;
	max-width: 120px;
	align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap = false }: any) => {
	return (
		<Item>
			{isAndroid && isMap ? (
				<CompactWebview source={{ uri: restaurant.photos[0] }} />
			) : (
				<CompactImage source={{ uri: restaurant.photos[0] }} />
			)}
			<Text variant="caption" numberOfLines={3}>
				{restaurant.name}
			</Text>
		</Item>
	);
};
