import {Buy_Cakes} from "./cake-types";

const initialState = {
    noOfCakes : 10
}

const CakeReducer = (state = initialState,action) => {
    switch (action.type) {
        case Buy_Cakes:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        default:
            return state
    }
}
export default CakeReducer