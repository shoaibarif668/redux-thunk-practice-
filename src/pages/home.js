import React from "react"
import CakeContainer from "../components/cake-container";
import HooksCakeContainer from "../components/hooks-cake-container";
import IceCreamContainer from "../components/ice-cream-container";
import SweetContainer from "../components/sweet-container";
import NewSweetContainer from "../components/new-sweet-container";

const Home = () =>{
    return(
        <>
            <HooksCakeContainer/>
            <CakeContainer/>
            <IceCreamContainer/>
            <SweetContainer/>
            <NewSweetContainer/>
        </>
    )
}
export default Home;
