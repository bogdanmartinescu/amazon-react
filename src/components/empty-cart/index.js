import React from "react";
import Button from "../button";
import EmptyImage from "../../assets/empty.svg";
import { CheckoutEmptyCart } from "./EmptyCartStyles";
// import { Link } from "react-router-dom";

function EmptyCart() {
	return (
		<CheckoutEmptyCart>
			<img src={EmptyImage} />

			<div>
				<h2>Your Amazon Cart is empty</h2>
				<a href="/">Shop today's deals</a>
				<p>&nbsp;</p>
				<div>
					<Button type="primary" fn={() => {}}>
						Sign in to your account
					</Button>
					&nbsp;&nbsp;
					<Button type="secondary" fn={() => {}}>
						Sign up now
					</Button>
				</div>
			</div>
		</CheckoutEmptyCart>
	);
}

export default EmptyCart;
