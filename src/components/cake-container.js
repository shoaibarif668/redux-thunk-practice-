import React from "react"
import {connect} from "react-redux";
import {buyCake} from "../redux"; //Action Creator


//Old React redux method without hooks

const CakeContainer = (props) => {
    return(
        <>
            <h2>Number of cakes - {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cakes</button>
        </>
    )
}

//Passing required states to the component from the store
const mapStateToProps = state => {
    return{
        noOfCakes: state.cake.noOfCakes
    }
}

//Passing dispatch functions to the component from the store
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer); //connecting the mapStateToProps and mapDispatchToProps to CakeContainer
