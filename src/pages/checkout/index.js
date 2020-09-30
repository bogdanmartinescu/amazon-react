import React from "react";
// import components
import Cart from "../../components/cart";
import CheckoutProduct from "../../components/checkout-product";
import EmptyCart from "../../components/empty-cart";
// import state from provider
import { useStateValue } from "../../provider";
// import styles
import {
	CheckoutPage,
	CheckoutLeft,
	CheckoutRight,
	CheckoutAd,
	CheckoutTitle,
	CheckoutProductsContainer,
} from "./CheckoutStyles";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<CheckoutPage>
			<CheckoutLeft>
				<CheckoutAd
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>

				<CheckoutTitle>Your Shopping Basket</CheckoutTitle>

				<CheckoutProductsContainer>
					{!basket?.length && <EmptyCart />}

					{basket.map((item, index) => {
						return (
							<CheckoutProduct
								key={index}
								item={item}
								dispatch={dispatch}
							></CheckoutProduct>
						);
					})}

					{/* <CheckoutProduct
						key={0}
						dispatch={dispatch}
						item={{
							id: 3324,
							title: 'Test Product lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
							price: 12.99,
							image: 'https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg'
						}}
					></CheckoutProduct>

					<CheckoutProduct
						key={1}
						dispatch={dispatch}
						item={{
							id: 33224,
							title: 'Test Product lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
							price: 12.99,
							image: 'https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg'
						}}
					></CheckoutProduct> */}
				</CheckoutProductsContainer>
			</CheckoutLeft>

			<CheckoutRight>
				<Cart />
			</CheckoutRight>
		</CheckoutPage>
	);
}

export default Checkout;
