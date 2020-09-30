import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import Button from "../../components/button";
import {
	SignInPage,
	SignInLogoContainer,
	SignInLogo,
	SignInContainer,
	SignInBox,
	SignInTitle,
	SignInLabel,
	SignInInput,
	SignInMessage,
	SignInAccountMessage,
	SignInNewAccountTitle,
	SignInSuccessMessage,
} from "./SignInStyles";

import LogoWhite from "../../assets/logo-white-bg.png";

function SignIn() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const signIn = async () => {
		// firebase login
		try {
			const response = await auth.signInWithEmailAndPassword(email, password);

			if (response) {
				setEmail("");
				setPassword("");
				setMessage("Successfully Signed In!");
				setTimeout(() => history.push("/"), 3000);
			}
		} catch (error) {
			setMessage(error.message);
		}
	};

	const createAccount = async () => {
		// firebase register
		try {
			const response = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			if (response) {
				setEmail("");
				setPassword("");
				setMessage("Successfully created your new account!");
				setTimeout(() => history.push("/"), 3000);
			}
		} catch (error) {
			console.log(error);
			setMessage(error.message);
		}
	};

	return (
		<SignInPage>
			<SignInLogoContainer>
				<Link to="/">
					<SignInLogo src={LogoWhite} />
				</Link>
			</SignInLogoContainer>
			<SignInContainer>
				<SignInBox>
					<SignInTitle>Sign-In</SignInTitle>
					{message && <SignInSuccessMessage>{message}</SignInSuccessMessage>}
					<SignInLabel>Email</SignInLabel>
					<SignInInput
						type="text"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<SignInLabel>Password</SignInLabel>
					<SignInInput
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<p>&nbsp;</p>

					<Button
						type="primary"
						fluid={true}
						size="large"
						fn={(e) => signIn(e)}
					>
						Sign in to your Account
					</Button>

					<SignInAccountMessage>
						<SignInNewAccountTitle>
							<h5>or</h5>
						</SignInNewAccountTitle>

						<Button
							type="secondary"
							fluid={true}
							size="large"
							fn={(e) => createAccount(e)}
						>
							Create a new Amazon Account
						</Button>
					</SignInAccountMessage>

					<SignInMessage>
						By continuing, you agree to Amazon's{" "}
						<a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>
						.
					</SignInMessage>
				</SignInBox>
			</SignInContainer>
		</SignInPage>
	);
}

export default SignIn;
