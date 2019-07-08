import { alertConstants } from '../Constans';
const SUCCESS = alertConstants.SUCCESS;
const ERROR = alertConstants.ERROR;
const CLEAR = alertConstants.CLEAR;

export const alertActions = {
    success,
    error,
    clear,
}

function success(msg){
    return{ type: SUCCESS, msg }
}
function error(msg){
    return{ type:ERROR, msg }
}
function clear(){
    return{ type:CLEAR }
}