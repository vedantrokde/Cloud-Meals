import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

type sizeVariantType = "small" | "medium" | "large";
const sizeVariant: Record<sizeVariantType, number> = {
	small: 1,
	medium: 2,
	large: 3,
};

type positionVariantType = "top" | "left" | "right" | "bottom";
const positionVariant: Record<positionVariantType, string> = {
	top: "marginTop",
	left: "marginLeft",
	right: "marginRight",
	bottom: "marginBottom",
};

const getVariant = (
	position: positionVariantType,
	size: sizeVariantType,
	theme: any
) => {
	const sizeIndex = sizeVariant[size];
	const property = positionVariant[position];
	const value = theme.space[sizeIndex];

	return `${property}:${value}`;
};

const SpacerView = styled(View)<{
	readonly variant: string;
}>`
	${(props) => props.variant};
`;

export const Spacer = ({
	position,
	size,
	children,
}: {
	position: positionVariantType;
	size: sizeVariantType;
	children: any;
}) => {
	const theme = useTheme();
	const variant: string = getVariant(position, size, theme);
	return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
	position: "top",
	size: "small",
};
