import React from 'react';
// import assets
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';
import { useStateValue } from '../../provider';
// import styled components
import { HeaderWrapper, HeaderNav, HeaderOption, HeaderOptionTop, HeaderOptionBottom, HeaderOptionBasket, HeaderBasketCount, HeaderLogo, HeaderSearch, HeaderSearchInput, HeaderSearchIcon } from './HeaderStyles';

function Header() {
	const [{ basket }, dispatch] = useStateValue();

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
				<HeaderOption>
					<HeaderOptionTop>Hello, Sign In</HeaderOptionTop>
					<HeaderOptionBottom>Account &amp; Lists</HeaderOptionBottom>
				</HeaderOption>

				<HeaderOption>
					<HeaderOptionTop>Returns,</HeaderOptionTop>
					<HeaderOptionBottom>&amp; Orders</HeaderOptionBottom>
				</HeaderOption>

				<HeaderOption>
					<HeaderOptionTop>Your,</HeaderOptionTop>
					<HeaderOptionBottom>Prime</HeaderOptionBottom>
				</HeaderOption>

				<Link to="/checkout">
					<HeaderOptionBasket>
						<ShoppingBasketIcon />
						<HeaderOptionBottom>
							<HeaderBasketCount>{basket?.length}</HeaderBasketCount>
						</HeaderOptionBottom>
					</HeaderOptionBasket>
				</Link>
			</HeaderNav>
		</HeaderWrapper>
	);
}

export default Header;
