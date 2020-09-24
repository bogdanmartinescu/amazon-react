import React from 'react';
import Button from '../button';
import { useStateValue } from '../../provider';
// import styled components
import { ProductContainer, ProductTitle, ProductPrice, ProductImage } from './ProductStyles';

function Product({ id, title, image, price }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			payload: {
				id,
				title,
				image,
				price
			}
		});
	};

	return (
		<ProductContainer>
			<ProductTitle>{title}</ProductTitle>
			<ProductPrice>
				<small>$</small> <strong>{price}</strong>
			</ProductPrice>
			<ProductImage src={image}></ProductImage>
			<Button type="primary" fn={addToBasket}>
				Add to Cart
			</Button>
		</ProductContainer>
	);
}

export default Product;
