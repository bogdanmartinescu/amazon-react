import styled from "styled-components";

export const SignInPage = styled.div`
	background: #fff;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const SignInLogoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const SignInContainer = styled.div`
	width: 100%;
	margin: 10px auto;
	display: flex;
	justify-content: center;
`;

export const SignInBox = styled.div`
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 310px;
	padding: 30px;
	min-height: 250px;
`;

export const SignInLogo = styled.img`
	margin: 10px auto 5px auto;
`;

export const SignInTitle = styled.h1`
	font-weight: 400;
	font-size: 28px;
	line-height: 1.2;
	margin-bottom: 15px;
`;

export const SignInLabel = styled.label`
	display: block;
	padding-left: 2px;
	padding-bottom: 5px;
	font-weight: 700;
	font-size: 13px;
`;

export const SignInInput = styled.input`
	background-color: #fff;
	width: 98%;
	height: 31px;
	padding: 3px 1%;
	line-height: normal;
	border: 1px solid #a6a6a6;
	border-top-color: #949494;
	border-radius: 3px;
	box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5),
		0 1px 0 rgba(0, 0, 0, 0.07) inset;
	outline: 0;
	transition: all 100ms linear;
	font: 400 13.3333px Arial;
	margin: 0 0 10px 0;

	&:focus {
		border-color: #e77600;
		box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
	}
`;

export const SignInMessage = styled.p`
	font-size: 12px;
	line-height: 1.5;
	margin: 10px 0 20px 0;

	a {
		color: #0066c0;
		text-decoration: none;

		&:hover {
			color: #c45500;
			text-decoration: underline;
		}
	}
`;

export const SignInAccountMessage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px auto 0;
`;
export const SignInNewAccountTitle = styled.div`
	text-align: center;
	position: relative;
	top: 2px;
	padding-top: 1px;
	margin-bottom: 14px;
	line-height: 0;

	&:after {
		content: "";
		width: 100%;
		background-color: transparent;
		display: block;
		height: 1px;
		border-top: 1px solid #e7e7e7;
		position: absolute;
		top: 50%;
		margin-top: -1px;
		z-index: 1;
	}

	h5 {
		line-height: 1;
		font-size: 12px;
		color: #767676;
		font-weight: 400;
		z-index: 2;
		position: relative;
		display: inline-block;
		background-color: #fff;
		padding: 0 8px 0 7px;
	}
`;

export const SignInSuccessMessage = styled.div`
	background: #eee;
	border-color: #ddd;
	padding: 10px;
	margin: 10px 0;
	font-size: 12px;
	border-radius: 4px;
`;
