import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
} from "../components/account.styles";

export default function LoginScreen({ navigation }: any) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { onLogin, error, isLoading } = useContext(AuthContext);
	return (
		<AccountBackground>
			<AccountCover />
			<Title variant="body">Meals To Go</Title>

			<AccountContainer>
				<AuthInput
					label="E-mail"
					value={email}
					textContentType="emailAddress"
					keyboardType="email-address"
					autoCapitalize="none"
					onChangeText={(u) => setEmail(u)}
				/>
				<Spacer size="large">
					<AuthInput
						label="Password"
						value={password}
						textContentType="password"
						secureTextEntry
						autoCapitalize="none"
						onChangeText={(p) => setPassword(p)}
					/>
				</Spacer>
				{error && (
					<ErrorContainer>
						<Text variant="error">{error}</Text>
					</ErrorContainer>
				)}
				<Spacer size="large">
					{!isLoading ? (
						<AuthButton
							icon="lock-open-outline"
							mode="contained"
							onPress={() => onLogin(email, password)}
						>
							Login
						</AuthButton>
					) : (
						<ActivityIndicator
							animating={true}
							color={Colors.blue300}
						/>
					)}
				</Spacer>
			</AccountContainer>
			<Spacer size="large">
				<AuthButton
					mode="contained"
					onPress={() => navigation.goBack()}
				>
					Back
				</AuthButton>
			</Spacer>
		</AccountBackground>
	);
}
