import {UPLOAD_SUCCESS,UPLOAD_FAIL} from '../actions/types';

const initialState=[];
export default function(state=initialState,action)
{   
    const {type,payload}=action
    switch(type)
    {
        case 'UPLOAD_SUCCESS':
            return console.log(`success`)
            
        case 'UPLOAD_FAIL':
            return console.log(`fail`)
        default:
            return state;
    }
}