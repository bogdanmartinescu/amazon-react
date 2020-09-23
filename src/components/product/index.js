import React from 'react';
import Button from '../button';
// import assets
// import ImagePlaceholder from '../../assets/81-QB7nDh4L.jpg';
// import styled components
import { ProductContainer, ProductTitle, ProductPrice, ProductImage } from './ProductStyles';

function Product({ title, image, price }) {
	return (
		<ProductContainer>
			<ProductTitle>{title}</ProductTitle>
			<ProductPrice>
				<small>$</small> <strong>{price}</strong>
			</ProductPrice>
			<ProductImage src={image}></ProductImage>
			<Button color="yellow">Add to Cart</Button>
		</ProductContainer>
	);
}

export default Product;
