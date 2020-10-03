import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import Button from "../button";
// import styles
import { CartWrapper, CartGift } from "./CartSubtotalStyles";
// import app state
import { useStateValue } from "../../provider";

function CartSubtotal() {
	const [{ basket }] = useStateValue();
	const history = useHistory();

	const getBasketTotal = () =>
		basket.reduce((subtotal, item) => (subtotal += item.price), 0);

	return (
		<CartWrapper>
			<CurrencyFormat
				renderText={(value) => (
					<React.Fragment>
						<p>
							Subtotal ({basket.length}) items: <strong>{value}</strong>
						</p>

						<CartGift>
							<input type="checkbox" />
							<span>This order contains a gift.</span>
						</CartGift>
					</React.Fragment>
				)}
				decimalScale={2}
				// value={getBasketTotal(basket)}
				value={getBasketTotal()}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<Button type="primary" fluid={true} fn={(e) => history.push("/checkout")}>
				Proceed to Checkout
			</Button>
		</CartWrapper>
	);
}

export default CartSubtotal;
