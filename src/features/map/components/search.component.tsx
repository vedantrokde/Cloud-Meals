import { View } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
	position: absolute;
	z-index: 999;
	top: 20px;
	width: 100%;
`;

export default function Search() {
	const { isLoading, error, location, search, keyword } =
		useContext(LocationContext);
	const [searchQuery, setSearchQuery] = useState(keyword);

	useEffect(() => {
		setSearchQuery(keyword);
	}, [keyword]);

	return (
		<SearchContainer>
			<Searchbar
				icon="map"
				placeholder="Search for a location"
				onChangeText={setSearchQuery}
				value={searchQuery}
				onSubmitEditing={() => search(searchQuery)}
			/>
		</SearchContainer>
	);
}
