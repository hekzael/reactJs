const initialState = {
	userLoged : {},
	cvUserLoged : {}
}

const userReducer = (state = initialState, action) => {
	switch( action.type){
		case 'API_CALL_SUCCESS_CV' :
			return {
				...state,
				cvUserLoged : action.cvUser
			}
		
		case 'API_CALL_SUCCESS_USER':
		return {
			...state,
			userLoged: action.user
		}

		default:
			return state
	}
}

export default userReducer