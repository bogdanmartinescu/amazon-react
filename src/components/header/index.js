import React from "react";
// import assets
import SearchIcon from "@material-ui/icons/Search";
import HeaderCart from "../header-cart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import Logo from "../../assets/logo.png";
// import link
import { Link } from "react-router-dom";
// import state from provider
import { useStateValue } from "../../provider";
// import styled components
import {
  HeaderWrapper,
  HeaderNav,
  HeaderOption,
  HeaderOptionTop,
  HeaderOptionBottom,
  HeaderOptionBasket,
  HeaderBasketCount,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchIcon,
} from "./HeaderStyles";

function Header() {
  const [{ basket }] = useStateValue();

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
            <HeaderOptionTop>Hello, Sign In</HeaderOptionTop>
            <HeaderOptionBottom>Account &amp; Lists</HeaderOptionBottom>
          </HeaderOption>
        </Link>

        <Link to="/orders">
          <HeaderOption>
            <HeaderOptionTop>Returns,</HeaderOptionTop>
            <HeaderOptionBottom>&amp; Orders</HeaderOptionBottom>
          </HeaderOption>
        </Link>

        <Link to="/prime">
          <HeaderOption>
            <HeaderOptionTop>Your,</HeaderOptionTop>
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
