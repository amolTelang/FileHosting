import {SEARCH_REQ,SEARCH_FAIL} from '../actions/types';

const initialState={
    file:[],
    searchcmp:false
};

export default function(state=initialState,action)
{
    const {type,action}=action;
    switch(type)
    {
        case SEARCH_REQ:
            return{
                ...state,
                file:payload,
                searchcmp:true
            }
        case SEARCH_FAIL:
            return{
                ...state,
                searchcmp:false
            }
        default:return state;
    }
}
