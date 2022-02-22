import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {buySweets} from "../redux";

const SweetContainer = () => {
    const sweets = useSelector(state=>state?.sweet.noOfSweets)
    const dispatch = useDispatch()
    return(
        <>
            <h2>Number of sweets - {sweets}</h2>
            <button onClick={() => dispatch(buySweets())}>Buy Sweets</button>
            <br/>
        </>
    )
}
export default SweetContainer