import {combineReducers} from "redux";
import iceCreamReducer from "./ice-cream/ice-cream-reducer";
import cakeReducer from "./cake/cake-reducer";
import sweetReducer from "./sweet/sweet-reducer";
import {fetchUsersReducer} from "./users/users-reducer";

const rootReducer = combineReducers({
    iceCream : iceCreamReducer,
    cake : cakeReducer,
    sweet : sweetReducer,
    fetchUsers : fetchUsersReducer
})

export default rootReducer