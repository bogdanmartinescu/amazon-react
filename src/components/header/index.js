import React from "react";
// import assets
import SearchIcon from "@material-ui/icons/Search";
import HeaderCart from "../header-cart";
import Logo from "../../assets/logo.png";
// import link
import { Link } from "react-router-dom";
// import state from provider
import { useStateValue } from "../../provider";
import { auth } from "../../firebase";
// import styled components
import {
	HeaderWrapper,
	HeaderNav,
	HeaderOption,
	HeaderOptionTop,
	HeaderOptionBottom,
	HeaderOptionBasket,
	HeaderLogo,
	HeaderSearch,
	HeaderSearchInput,
	HeaderSearchIcon,
} from "./HeaderStyles";

function Header() {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user?.email) auth.signOut();
	};

	const createUsernameFromEmail = (email) => email.split("@")[0];

	return (
		<HeaderWrapper>
			<Link to="/">
				<HeaderLogo src={Logo} />
			</Link>

			<HeaderSearch>
				<HeaderSearchInput type="text" />
				<HeaderSearchIcon>
					<SearchIcon />
				</HeaderSearchIcon>
			</HeaderSearch>

			<HeaderNav>
				<Link to="/signin">
					<HeaderOption>
						<HeaderOptionTop>
							Hello,{" "}
							{user && user.email
								? createUsernameFromEmail(user.email)
								: "Guest"}
						</HeaderOptionTop>
						<HeaderOptionBottom onClick={() => handleAuthentication()}>
							{user && user.email ? "Sign Out" : "Sign In"}
						</HeaderOptionBottom>
					</HeaderOption>
				</Link>

				<Link to="/orders">
					<HeaderOption>
						<HeaderOptionTop>Returns</HeaderOptionTop>
						<HeaderOptionBottom>&amp; Orders</HeaderOptionBottom>
					</HeaderOption>
				</Link>

				<Link to="/prime">
					<HeaderOption>
						<HeaderOptionTop>Your</HeaderOptionTop>
						<HeaderOptionBottom>Prime</HeaderOptionBottom>
					</HeaderOption>
				</Link>

				<Link to="/cart">
					<HeaderOptionBasket>
						<HeaderCart />
					</HeaderOptionBasket>
				</Link>
			</HeaderNav>
		</HeaderWrapper>
	);
}

export default Header;
