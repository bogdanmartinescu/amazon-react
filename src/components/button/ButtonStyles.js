import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.a`
	color: #111;
	border-radius: 3px;
	border-style: solid;
	border-width: 1px;
	cursor: pointer;
	display: inline-block;
	padding: 0;
	text-align: center;
	text-decoration: none !important;
	vertical-align: middle;

	${(props) =>
		props.type === 'primary'
			? css`
					background: #f0c14b;
					border-color: #a88734 #9c7e31 #846a29;

					&:hover {
						background: darken(#f0c14b, 10%) !important;
					}
			  `
			: css`
					background: #e7e9ec;
					border-color: #adb1b8 #a2a6ac #8d9096;

					&:hover {
						background: darken(#e7e9ec, 10%) !important;
					}
			  `}

	${(props) =>
		props.fluid &&
		css`
			width: 100%;
		`}
`;

export const ButtonInner = styled.span`
	background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
	box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
`;

export const ButtonText = styled.span`
	font-family: 'Amazon Ember', Arial, sans-serif;
	background-color: transparent;
	border: 0;
	display: block;
	font-size: 13px;
	// font-weight: 800;
	line-height: 30px;
	margin: 0;
	outline: 0;
	padding: 0 15px 0 15px;
	text-align: center;
	white-space: nowrap;
`;
