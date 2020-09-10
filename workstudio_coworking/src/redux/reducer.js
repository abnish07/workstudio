import React from 'react';
import { SUBMIT_DATA_SUCCCESS } from './actionType';

const initState=({
    submittedResponse: []
})

const reducer = (state = initState, {type, payload})=>{
            console.log("payload",payload)
        switch(type){
            case SUBMIT_DATA_SUCCCESS:
                return {
                    submittedResponse: payload
                }
                default:
                    return state 
        }
}

export default reducer;
