import {SEARCH_REQ,SEARCH_FAIL} from './types';
import axios from 'axios';




export const searchFile =(filename)=>async dispatch =>{

    try {
        const res=await axios.get(`http://localhost:3001/files/${filename}`)
        dispatch({
            type:SEARCH_REQ,
            payload:res.data
        })

    } catch (error) {
        console.error(error);
        dispatch({
            type:SEARCH_FAIL,
            payload:'fail'
        })

    }

}