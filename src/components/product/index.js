import React from 'react';
// import assets
import ImagePlaceholder from '../../assets/81-QB7nDh4L.jpg';
// import styled components
import {
    ProductContainer,
    ProductTitle,
    ProductPrice,
    ProductRating,
    ProductImage,
    ProductAddToCart
} from './ProductStyles';

function Product({ Title, Image }) {
    return (
        <ProductContainer>
            <ProductTitle>The Lean Startup</ProductTitle>
            <ProductPrice><small>$</small> <strong>11.99</strong></ProductPrice>
            <ProductRating></ProductRating>
            <ProductImage src={Image || ImagePlaceholder}></ProductImage>
            <ProductAddToCart>Add To Cart</ProductAddToCart>
        </ProductContainer>
    )
}

export default Product;
