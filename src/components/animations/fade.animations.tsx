import { Animated } from "react-native";
import React, { useRef, useEffect } from "react";

export default function FadeInView({ duration = 1500, ...props }) {
	const fadeAmin = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAmin, {
			toValue: 1,
			duration: duration,
			useNativeDriver: true,
		}).start();
	}, [fadeAmin, duration]);

	return (
		<Animated.View
			style={{
				...props.style,
				opacity: fadeAmin,
			}}
		>
			{props.children}
		</Animated.View>
	);
}
