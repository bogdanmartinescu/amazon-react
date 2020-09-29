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
    min-height: 300px;
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
    box-shadow: 0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset;
    outline: 0;
    transition: all 100ms linear;
    font: 400 13.3333px Arial;
    margin: 0 0 10px 0;

    &:focus {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
    }
`;
