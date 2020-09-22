import React from 'react';
// import components
import Product from '../product';
// import assets
import Hero from '../../assets/hero.jpg';
// import styled components
import {
    HomeContainer,
    HomeHeroImage,
    HomeRow
} from './HomeStyles';

function Home() {
    return (
        <HomeContainer>
            <HomeHeroImage src={Hero} />

            <HomeRow style={{'marginTop': '-350px'}}>
                <Product />
                <Product />
                <Product />
                <Product />
            </HomeRow>

            <HomeRow>
                <Product />
                <Product />
            </HomeRow>

            <HomeRow>
                <Product />
            </HomeRow>
        </HomeContainer>
    )
}

export default Home;
