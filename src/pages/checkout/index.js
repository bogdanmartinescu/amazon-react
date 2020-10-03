import React from "react";
import {
	CheckoutPageWrapper,
	CheckoutTitle,
	CheckoutProducts,
} from "./CheckoutPageStyles";

function Checkout() {
	return (
		<CheckoutPageWrapper>
			<CheckoutTitle>Checkout</CheckoutTitle>

			<CheckoutProducts></CheckoutProducts>
		</CheckoutPageWrapper>
	);
}

export default Checkout;
