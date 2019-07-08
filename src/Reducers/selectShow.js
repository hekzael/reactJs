const initialState = {
    show : false,
    name : 0
}

const showReducer = (state = initialState, action) => {
	switch( action.type){
		case 'SELECT_SHOW' :
			return {
                ...state,
                show : true,
                name : action.name
            }
        case 'ONCLICK_BACK' :
            return {
                ...state,
                show : false,
                name : action.id
            }

		default:
			return state
	}
}

export default showReducer