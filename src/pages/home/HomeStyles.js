import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1500px;

	margin: 0 auto;
`;

export const HomeHeroImage = styled.img`
	object-fit: contain;
	width: 100%;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const HomeRow = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;
