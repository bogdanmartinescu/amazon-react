import React from "react";
import {
  HeaderCartWrapper,
  HeaderCartCount,
} from "../header-cart/HeaderCartStyles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { useStateValue } from "../../provider";

function HeaderCart() {
  const [{ basket }] = useStateValue();

  return (
    <HeaderCartWrapper>
      <CartIcon />
      <HeaderCartCount>{basket?.length}</HeaderCartCount>
      <strong>Cart</strong>
    </HeaderCartWrapper>
  );
}

export default HeaderCart;
