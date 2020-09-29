import styled from "styled-components";

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	align-items: center;
	justify-content: flex-end;
	margin: 10px;
	padding: 20px;
	width: 100%;
	max-height: 400px;
	min-width: 100px;
	z-index: 1;
`;

export const ProductTitle = styled.h2`
	font-size: 18px;
`;

export const ProductPrice = styled.p`
	margin: 5px 0;
	font-size: 14px;
`;

export const ProductRating = styled.div``;

export const ProductImage = styled.img`
	max-height: 200px;
	width: 100%;
	object-fit: contain;
	margin-bottom: 15px;
`;

export const ProductAddToCart = styled.button`
	background: #f0c14b;
	border: 1px solid #a88734;
	color: #111;
`;
