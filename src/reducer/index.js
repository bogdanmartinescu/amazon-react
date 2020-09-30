export const initialState = {
	basket: [],
	user: null,
};

export const types = {
	ADD_TO_BASKET: "ADD_TO_BASKET",
	REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
	SET_LOGGED_IN_USER: "SET_LOGGED_IN_USER",
};

export const reducer = (state = initialState, action) => {
	// console.log(action.payload, 12313);
	switch (action.type) {
		case types.ADD_TO_BASKET:
			return {
				...state,
				basket: [...state.basket, action.payload],
			};

		case types.REMOVE_FROM_BASKET:
			return {
				...state,
				basket: [...state.basket.filter((item) => item.id !== action.payload)],
			};
		case types.SET_LOGGED_IN_USER:
			return {
				...state,
				user: { ...action.payload },
			};
		default:
			return state;
	}
};
