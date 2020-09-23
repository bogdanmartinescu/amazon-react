import React from 'react';
import Cart from '../../components/cart';

import { CheckoutPage, CheckoutLeft, CheckoutRight, CheckoutAd, CheckoutTitle } from './CheckoutStyles';

function Checkout() {
	return (
		<CheckoutPage>
			<CheckoutLeft>
				<CheckoutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

				<CheckoutTitle>Your Shopping Basket</CheckoutTitle>
			</CheckoutLeft>

			<CheckoutRight>
				<Cart />
			</CheckoutRight>
		</CheckoutPage>
	);
}

export default Checkout;
