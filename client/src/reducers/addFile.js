import {UPLOAD_SUCCESS,UPLOAD_FAIL} from '../actions/types';

const initialState=[];
export default function(state=initialState,action)
{   
    const {type,payload}=action
    switch(type)
    {
        case 'UPLOAD_SUCCESS':
            return{

            }
        case 'UPLOAD_FAIL':
            return{

            }

            
        default:
            return state;
    }
}