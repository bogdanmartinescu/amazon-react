import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Button from '../button';
// import styles
import { CartWrapper } from './CartStyles';

function Cart() {
	const basket = [];
	const getBasketTotal = () => {};

	return (
		<CartWrapper>
			<CurrencyFormat
				renderText={(value) => (
					<React.Fragment>
						<p>
							Subtotal ({basket.length}) items: <strong>0</strong>
						</p>

						<small className="subtotal__gift">
							<input type="checkbox" /> <span>This order contains a gift.</span>
						</small>
					</React.Fragment>
				)}
				decimalScale={2}
				// value={getBasketTotal(basket)}
				value={0}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<Button color="yellow" fluid={true}>
				Proceed to Checkout
			</Button>
		</CartWrapper>
	);
}

export default Cart;
