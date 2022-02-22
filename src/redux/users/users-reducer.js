import {Fetch_Users_Success,Fetch_Users,Fetch_Users_Error} from "./users-types";

const initialState = {
    isLoading : false,
    userData : [],
    error : ''
}

const fetchUsersReducer = (state=initialState,action) => {
    switch (action.type) {
        case Fetch_Users:
            return{
                ...state,
                isLoading: true,
            }
        case Fetch_Users_Success:
            return {
                ...state,
                userData: action.payload,
                isLoading: false
            }
        case Fetch_Users_Error:
            return {
                ...state,
                isLoading: false,
                error : action.error
            }
        default:
            return state
    }
}

export {fetchUsersReducer}