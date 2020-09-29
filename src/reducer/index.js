export const initialState = {
	basket: [],
	user: null
};

export const types = {
	ADD_TO_BASKET: 'ADD_TO_BASKET',
	REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET'
};

export const reducer = (state = initialState, action) => {
	// console.log(action.payload, 12313);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.payload]
			};

		case 'REMOVE_FROM_BASKET':
			return {
				...state,
				basket: [...state.basket.filter((item) => item.id !== action.payload)]
			};
		default:
			return state;
	}
};
