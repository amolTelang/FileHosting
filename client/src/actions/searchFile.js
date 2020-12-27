import {SEARCH_REQ,SEACRH_FAIL} from './types';
import axios from 'axios';




export default searchFile =()=>async dispatch =>{

    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body=JSON.stringify({search});

    try {
        const res=await axios.get(`http://localhost:3001/upload/file/`)

    } catch (error) {
        console.error(error);
        dispatch({
            type:SEACRH_FAIL
        })

    }

}