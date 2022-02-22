import {Buy_Ice_Creams, Buy_Ice_Creams_Async} from "./ice-cream-types";

//Action Creator for ice-cream in our Cake-shop project
const buyIceCream = () => {
    return{
        type: Buy_Ice_Creams
    }
}
const buyAsyncIceCreams = () => {
    return {
        type: Buy_Ice_Creams_Async
    }
}
export {buyIceCream,buyAsyncIceCreams}