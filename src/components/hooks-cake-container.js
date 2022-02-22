import React from "react"
import {useSelector,useDispatch} from "react-redux";
import {buyCake} from "../redux"; //Exactly like mapStateToProps & mapDispatchToProps function respectively

//React redux method with hooks
const HooksCakeContainer = () => {
    const noOfCakes = useSelector(state => state?.cake.noOfCakes)
    const dispatch = useDispatch()
    return(
        <>
            <h2>Number of Cakes (Hooks) - {noOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </>
    )
}
export default HooksCakeContainer