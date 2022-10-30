import React from "react";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AnimationWrapper,
	AuthButton,
	Title,
} from "../components/account.styles";

export default function AccountScreen({ navigation }: any) {
	return (
		<AccountBackground>
			<AccountCover />
			<AnimationWrapper>
				<LottieView
					key="animation"
					autoPlay
					loop
					resizeMode="cover"
					source={require("../../../../assets/watermelon.json")}
				/>
			</AnimationWrapper>
			<Title variant="body">Meals To Go</Title>
			<AccountContainer>
				<AuthButton
					icon="lock-open-outline"
					mode="contained"
					onPress={() => navigation.navigate("Login")}
				>
					Login
				</AuthButton>
				<Spacer size="large">
					<AuthButton
						icon="email"
						mode="contained"
						onPress={() => navigation.navigate("Register")}
					>
						Register
					</AuthButton>
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
}
