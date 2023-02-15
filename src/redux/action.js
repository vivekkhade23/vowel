import { SET_ADDRESS, SET_AUTH } from "./actionType"

 export const Address=(data)=>{
  return{
    type:SET_ADDRESS,
    payload:data
  }
}

export const Authenticate=(data)=>{
  return{
    type:SET_AUTH,
    payload:data
  }
}
