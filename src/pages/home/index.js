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
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
			</HomeRow>

			<HomeRow>
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
			</HomeRow>

			<HomeRow>
				<Product title="The Lean Startup" price="19.99" image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
			</HomeRow>
		</HomeContainer>
	);
}

export default Home;
