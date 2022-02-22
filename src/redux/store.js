import {createStore,applyMiddleware} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

//For debugging with redux devtools extension
import {composeWithDevTools} from "redux-devtools-extension";
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store