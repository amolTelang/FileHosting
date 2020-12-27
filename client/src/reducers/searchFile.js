import {SEARCH_REQ,
    SEARCH_FAIL,
    DOWNLOAD} from '../actions/types';

const initialState={
    file:[],
    filename:null,
    searchCompleted:false
};

export default function(state=initialState,action)
{
    const {type,payload}=action;
    switch(type)
    {   case DOWNLOAD:
        return{
            ...state
        }
        case SEARCH_REQ:   
        return{

                ...state,
                file:payload,
                filename:payload.filename,
                searchCompleted:true
            }
        case SEARCH_FAIL:
            return{
                ...state,
                searchCompleted:false
            }
        default:return state;
    }
}
