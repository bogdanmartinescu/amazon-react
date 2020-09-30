import React from "react";
import {
	CheckoutProductContainer,
	CheckoutProductImage,
	CheckoutProductInfo,
	CheckoutProductTitle,
	CheckoutProductPrice,
} from "./CheckoutProductStyles";

import { types } from "../../reducer";
import Button from "../button";

function CheckoutProduct({ item: { id, title, image, price }, dispatch }) {
	const removeFromBasket = () => {
		dispatch({
			type: types.REMOVE_FROM_BASKET,
			payload: id,
		});
	};

	return (
		<CheckoutProductContainer>
			<CheckoutProductImage src={image} />
			<CheckoutProductInfo>
				<CheckoutProductTitle>{title}</CheckoutProductTitle>
				<CheckoutProductPrice>$ {price}</CheckoutProductPrice>
				<Button type="secondary" fluid={false} fn={() => removeFromBasket()}>
					Remove from Cart
				</Button>
			</CheckoutProductInfo>
		</CheckoutProductContainer>
	);
}

export default CheckoutProduct;
