import axios from 'axios';
import {DOWNLOAD,
SEARCH_FAIL} from './types';


export const downloadFile =(filename)=>async dispatch=>{

try {
    const res=await axios.get(`http://localhost:3001/files/download/${filename}`)
    dispatch({
        type:DOWNLOAD
    })
} catch (error) {
    console.error(error);
    dispatch({
        type:SEARCH_FAIL,
        payload:`fail`
    })
}
}