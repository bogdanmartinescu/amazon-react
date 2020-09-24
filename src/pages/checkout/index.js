import React from 'react';
import Cart from '../../components/cart';
import { useStateValue } from '../../provider';

import { CheckoutPage, CheckoutLeft, CheckoutRight, CheckoutAd, CheckoutTitle } from './CheckoutStyles';

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<CheckoutPage>
			<CheckoutLeft>
				<CheckoutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

				<CheckoutTitle>Your Shopping Basket</CheckoutTitle>

				{basket.map((item) => {
					return <p key={item.id}>{item.title}</p>;
				})}
			</CheckoutLeft>

			<CheckoutRight>
				<Cart />
			</CheckoutRight>
		</CheckoutPage>
	);
}

export default Checkout;
