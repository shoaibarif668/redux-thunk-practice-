import React from "react"
import {useSelector,useDispatch} from "react-redux";
import {buyAsyncIceCreams, buyIceCream} from "../redux";

const IceCreamContainer = () => {
    const iceCreams = useSelector(state => state?.iceCream.noOfIceCreams)
    const dispatch = useDispatch()
    return(
        <>
        <h2>Buy Ice Creams (Hooks) - {iceCreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
            <button onClick={() => dispatch(buyAsyncIceCreams())}>Buy Ice Cream Async</button>
        </>
    )
}

export default IceCreamContainer