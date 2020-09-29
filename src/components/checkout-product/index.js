import React from 'react';
import { CheckoutProductContainer, CheckoutProductImage, CheckoutProductInfo, CheckoutProductTitle, CheckoutProductPrice } from './CheckoutProductStyles';

import Button from '../button';

function CheckoutProduct({ item: { id, title, image, price }, dispatch }) {
	// console.log(dispatch);
	return (
		<CheckoutProductContainer>
			<CheckoutProductImage src={image} />
			<CheckoutProductInfo>
				<CheckoutProductTitle>{title}</CheckoutProductTitle>
				<CheckoutProductPrice>$ {price}</CheckoutProductPrice>
				<Button type="secondary" fluid={false} fn={() => dispatch({ type: 'REMOVE_FROM_BASKET', payload: id })}>
					Remove from Cart
				</Button>
			</CheckoutProductInfo>
		</CheckoutProductContainer>
	);
}

export default CheckoutProduct;
