import { SET_ADDRESS, SET_AUTH } from "./actionType";

const Reducer = (state, { type, payload }) => {
    switch (type) {
     case SET_ADDRESS:
        return {
            ...state,
            address:payload
        }
        case SET_AUTH:
            return {
                ...state,
                AuthAdmin:payload
            }
        default:
            return state;
    }
}

export default Reducer