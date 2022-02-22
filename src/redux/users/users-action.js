import axios from "axios"
import {Fetch_Users_Error,Fetch_Users_Success,Fetch_Users} from "./users-types";

const fetchUsers = () => {
    return {
        type:Fetch_Users,
    }
}

const fetchUsersSuccess = (userData) => {
    return{
        type:Fetch_Users_Success,
        payload: userData
    }
}

const fetchUsersError = (error) => {
    return {
        type: Fetch_Users_Error,
        error: error
    }
}

export {fetchUsers,fetchUsersSuccess,fetchUsersError}

//Thunk functions used to perform async actions, what is different? it does not have to be pure, and it returns another function
export const fetchThunkUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsers())
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((response)=>{
                dispatch(fetchUsersSuccess(response.data))
            })
            .catch((error)=>{
                dispatch(fetchUsersError(error.message))
            })
    }
}