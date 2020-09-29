import React from "react";
import { Link } from "react-router-dom";
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
} from "./SignInStyles";

import LogoWhite from "../../assets/logo-white-bg.png";

function SignIn() {
  return (
    <SignInPage>
      <SignInLogoContainer>
        <Link to="/">
          <SignInLogo src={LogoWhite} />
        </Link>
      </SignInLogoContainer>

      <SignInContainer>
        <SignInBox>
          <SignInTitle>Sign In</SignInTitle>

          <SignInLabel>Email</SignInLabel>
          <SignInInput type="text" name="email" />

          <SignInLabel>Password</SignInLabel>
          <SignInInput type="password" name="password" />

          <Button type="primary" fluid={true} size="large">Sign In</Button>
        </SignInBox>
      </SignInContainer>
    </SignInPage>
  );
}

export default SignIn;
