import React from "react";
// import components
import CartSubtotal from "../../components/cart-subtotal";
import CartProduct from "../../components/cart-product";
import CartEmpty from "../../components/cart-empty";
// import state from provider
import { useStateValue } from "../../provider";
// import styles
import {
	CartPage,
	CartLeft,
	CartRight,
	CartAd,
	CartTitle,
	CartProductsContainer,
} from "./CartStyles";

function Cart() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<CartPage>
			<CartLeft>
				<CartAd
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>

				<CartTitle>Your Shopping Basket</CartTitle>

				<CartProductsContainer>
					{!basket?.length && <CartEmpty />}

					{basket.map((item, index) => {
						return (
							<CartProduct
								key={index}
								item={item}
								dispatch={dispatch}
							></CartProduct>
						);
					})}
				</CartProductsContainer>
			</CartLeft>

			<CartRight>
				<CartSubtotal />
			</CartRight>
		</CartPage>
	);
}

export default Cart;
