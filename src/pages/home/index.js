import React from 'react';
// import components
import Product from '../../components/product';
// import assets
import Hero from '../../assets/hero.jpg';
// import styled components
import { HomeContainer, HomeHeroImage, HomeRow } from './HomeStyles';

function Home() {
	return (
		<HomeContainer>
			<HomeHeroImage src={Hero} />

			<HomeRow style={{ marginTop: '-320px' }}>
				<Product id="1" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product id="2" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product id="3" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product id="4" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
			</HomeRow>

			<HomeRow>
				<Product id="5" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product id="6" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
			</HomeRow>

			<HomeRow>
				<Product id="7" title="The Lean Startup" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
			</HomeRow>
		</HomeContainer>
	);
}

export default Home;
