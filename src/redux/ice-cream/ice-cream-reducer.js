import {Buy_Ice_Creams,Buy_Ice_Creams_Async} from "./ice-cream-types";

const initialState = {
    noOfIceCreams : 10
}

const IceCreamReducer = (state = initialState,action) => {
    switch (action.type) {
        case Buy_Ice_Creams:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            }
        case Buy_Ice_Creams_Async:
            return{
                ...state,
                noOfIceCreams: state.noOfIceCreams - 3
            // setTimeout(()=>{
            //
            // },100)
            }
        default:
            return state
    }
}
export default IceCreamReducer