import React from "react";
import {
  CheckoutProductContainer,
  CheckoutProductImage,
  CheckoutProductInfo,
  CheckoutProductTitle,
  CheckoutProductPrice,
} from "./CheckoutProductStyles";

import Button from "../button";

function CheckoutProduct({ item: { id, title, image, price } }) {
  return (
    <CheckoutProductContainer>
      <CheckoutProductImage src={image} />
      <CheckoutProductInfo>
        <CheckoutProductTitle>{title}</CheckoutProductTitle>
        <CheckoutProductPrice>$ {price}</CheckoutProductPrice>
        <Button type="secondary" fluid={false} fn={() => {}}>
          Remove from Cart
        </Button>
      </CheckoutProductInfo>
    </CheckoutProductContainer>
  );
}

export default CheckoutProduct;
