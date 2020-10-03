import React from "react";
import Button from "../button";
import EmptyImage from "../../assets/empty.svg";
import {
	CartEmptyState,
	CartEmptyImage,
	CartEmptyMessage,
	CartEmptyTitle,
	CartEmptyDeals,
	CartEmptyButtons,
} from "./CartEmptyStyles";

import { useHistory, Link } from "react-router-dom";

function CartEmpty() {
	const history = useHistory();

	return (
		<CartEmptyState>
			<CartEmptyImage src={EmptyImage} />

			<CartEmptyMessage>
				<CartEmptyTitle>Your Amazon Cart is empty</CartEmptyTitle>
				<Link to="/">
					<CartEmptyDeals>Shop today's deals</CartEmptyDeals>
				</Link>
				<p>&nbsp;</p>
				<CartEmptyButtons>
					<Button type="primary" fn={() => history.push("/signin")}>
						Sign in to your account
					</Button>
					&nbsp;&nbsp;
					<Button type="secondary" fn={() => history.push("/signin")}>
						Sign up now
					</Button>
				</CartEmptyButtons>
			</CartEmptyMessage>
		</CartEmptyState>
	);
}

export default CartEmpty;
