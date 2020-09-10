import React from 'react';
import { SUBMIT_DATA_SUCCCESS } from './actionType';
import axios from 'axios';

export const submitDataSuccessful=(payload)=>({
    type: SUBMIT_DATA_SUCCCESS,
    payload
})

 export const submitYourRequirement=(query)=>(dispatch)=>{
    return axios.post("http://localhost:8000/contact-us", {
        name: query.name,
        email: query.email,
        city: query.city,
        mobileNo: query.mobileNo
    })
    .then(res=>{
        return dispatch(submitDataSuccessful(res))
    })
    .catch(error=>{
        console.log(error)
    })
}