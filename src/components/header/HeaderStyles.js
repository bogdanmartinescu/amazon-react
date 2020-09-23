import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	background-color: #131921;
	position: sticky;
	top: 0;
	z-index: 100;
	width: 100vw;
`;

export const HeaderLogo = styled.img`
	width: 100px;
	object-fit: contain;
	margin: 0 20px;
	margin-top: 10px;
`;

export const HeaderSearch = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;
`;

export const HeaderSearchInput = styled.input`
	height: 12px;
	padding: 10px;
	border: none;
	width: 100%;
	outline: none;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;

	&:focus {
		border: 3px solid #febd69;
		border-right: none;
	}
`;

export const HeaderSearchIcon = styled.div`
	display: flex;
	align-items: center;

	svg {
		padding: 5px;
		height: 22px;
		background-color: #febd69;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;

		&:hover {
			background: darken(#febd69, 10%);
		}
	}
`;

export const HeaderNav = styled.div`
	display: flex;
	justify-content: space-evenly;
	// flex: .15;
`;

export const HeaderOption = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	color: #fff;
`;

export const HeaderOptionTop = styled.span`
	font-size: 12px;
`;

export const HeaderOptionBottom = styled.span`
	font-size: 14px;
	font-weight: 800;
`;

export const HeaderOptionBasket = styled.span`
	display: flex;
	align-items: center;
	color: #fff;
`;

export const HeaderBasketCount = styled.span`
	margin: 0 10px;
`;
