import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
	padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled(Card.Title)`
	padding-left: 0;
	color: ${(props) => props.theme.colors.ui.primary};
`;

export const RowEnd = styled(View)`
	flex-direction: row;
	justify-content: flex-end;
`;

export const Column = styled(View)`
	flex-direction: column;
`;

export const Icon = styled(Image)`
	width: 15px;
	height: 15px;
`;
