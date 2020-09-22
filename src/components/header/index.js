import React from 'react';
// import assets
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logo from '../../assets/logo.png';
// import styled components
import {
    HeaderWrapper,
    HeaderNav,
    HeaderOption,
    HeaderOptionTop,
    HeaderOptionBottom,
    HeaderOptionBasket,
    HeaderBasketCount,
    HeaderLogo,
    HeaderSearch,
    HeaderSearchInput,
    HeaderSearchIcon
} from './HeaderStyles';

function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo src={Logo} />

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIcon>
                    <SearchIcon />
                </HeaderSearchIcon>
            </HeaderSearch>

            <HeaderNav>
                <HeaderOption>
                    <HeaderOptionTop>Hello, Sign In</HeaderOptionTop> 
                    <HeaderOptionBottom>Account &amp; Lists</HeaderOptionBottom>
                </HeaderOption>

                <HeaderOption>
                    <HeaderOptionTop>Returns,</HeaderOptionTop>
                    <HeaderOptionBottom>&amp; Orders</HeaderOptionBottom>
                </HeaderOption>

                <HeaderOption>
                    <HeaderOptionTop>Your,</HeaderOptionTop>
                    <HeaderOptionBottom>Prime</HeaderOptionBottom>
                </HeaderOption>

                <HeaderOptionBasket>
                    <ShoppingBasketIcon />
                    <HeaderOptionBottom>
                        <HeaderBasketCount>0</HeaderBasketCount>
                    </HeaderOptionBottom>
                </HeaderOptionBasket>  
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header;
