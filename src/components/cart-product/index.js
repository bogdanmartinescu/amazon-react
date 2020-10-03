import React from "react";
import {
	CartProductContainer,
	CartProductImage,
	CartProductInfo,
	CartProductTitle,
	CartProductPrice,
} from "./CartProductStyles";

import { types } from "../../reducer";
import Button from "../button";

function CartProduct({ item: { id, title, image, price }, dispatch }) {
	const removeFromBasket = () => {
		dispatch({
			type: types.REMOVE_FROM_BASKET,
			payload: id,
		});
	};

	return (
		<CartProductContainer>
			<CartProductImage src={image} />
			<CartProductInfo>
				<CartProductTitle>{title}</CartProductTitle>
				<CartProductPrice>$ {price}</CartProductPrice>
				<Button type="secondary" fluid={false} fn={() => removeFromBasket()}>
					Remove from Cart
				</Button>
			</CartProductInfo>
		</CartProductContainer>
	);
}

export default CartProduct;
