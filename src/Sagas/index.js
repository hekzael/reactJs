import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import data from '../Helpers/db.json';

export function* watcherSaga(){ //watchers
    yield takeLatest('API_CALL_REQUEST_USER', workerSaga);
    yield takeLatest('API_CALL_REQUEST_CV', cvUserSaga);
}



function fetchUser(){ // services

    return data /* axios({
        method: 'get',
        url: 'http://localhost/api-friends/public/auth/login'
    }); */
}
function fecthCvUser(){
    return data
}
function* cvUserSaga(){
    try{
        const response = yield call(fecthCvUser);
        const cvUser = response.cvUser[0];
        yield put({type: 'API_CALL_SUCCESS_CV', cvUser })
    
    }catch( error ){

        yield put({ type: 'API_CALL_FAILURE_CV', error });
    }
}
function* workerSaga(){ //effects
    try{
        const response = yield call(fetchUser);
       
        const user = response.users[0];
    
        yield put({ type: 'API_CALL_SUCCESS_USER', user });

    }catch( error ){

        yield put({ type: 'API_CALL_FAILURE_USER', error });
    }
}