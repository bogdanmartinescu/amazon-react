import styled from "styled-components";

export const CartProductContainer = styled.div`
	display: flex;
	margin: 20px 0;
`;

export const CartProductImage = styled.img`
	max-width: 180px;
	width: 180px;
	height: 180px;
	object-fit: contain;
`;

export const CartProductInfo = styled.div`
	padding-left: 0px;
`;

export const CartProductTitle = styled.p`
	font-size: 16px;
	font-weight: 800;
`;

export const CartProductPrice = styled.p`
	font-weight: 800;
	font-size: 12px;
	margin: 10px 0;
`;
