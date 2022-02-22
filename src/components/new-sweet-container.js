import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {buyCustomSweets} from "../redux";

const NewSweetContainer = () => {
    const [sweets,setSweets] = useState("")
        useEffect(()=>{
            console.log(sweets);
        },[sweets])
    const dispatch = useDispatch()

    const buySweets = () => {
        if(sweets && Number.isInteger(parseInt(sweets))){
            dispatch(buyCustomSweets(parseInt(sweets)))
        }
        else{
            alert("not a number")
        }
    }
    return(
        <>
            <input type="number" onChange={(e)=>setSweets(e.target.value)} placeholder="Specify how much you want to buy"/>
            <button onClick={buySweets}>Buy Custom Number of Sweets</button>
        </>
    )
}
export default NewSweetContainer