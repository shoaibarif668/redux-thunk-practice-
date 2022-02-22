import {Buy_Custom_Sweets, Buy_Sweets} from "./sweet-types";

const initialState = {
    noOfSweets : 50
}

const sweetReducer = (state=initialState,action) => {
    switch (action.type) {
        case Buy_Sweets:
            return{
                ...state,
                noOfSweets: state.noOfSweets - 1
            }
        case Buy_Custom_Sweets:
            return{
                ...state,
                noOfSweets: state.noOfSweets - action.payload
            }
        default:
            return state
    }
}
export default sweetReducer;