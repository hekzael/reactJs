import { combineReducers } from 'redux';
import user from './user';
import selectShow from './selectShow';


const reducers = combineReducers({
    user,
    selectShow
})

export default reducers
