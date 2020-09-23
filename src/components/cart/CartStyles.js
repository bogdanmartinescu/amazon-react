import styled from 'styled-components';

export const CartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 300px;
	height: 100px;
	padding: 20px;
	background-color: #f3f3f3;
	border: 1px solid #ddd;
	border-radius: 3px;

	p,
	small {
		margin: 10px 0;
	}

	.subtotal__gift {
		display: flex;
		align-items: center;
	}

	.input[type='checkbox'] {
		margin-right: 10px;
	}
`;
