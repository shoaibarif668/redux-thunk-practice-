import {Buy_Cakes} from "./cake-types";

//Action Creator for cake in our Cake-shop project
const buyCake = () => {
    return{
        type: Buy_Cakes
    }
}
export default buyCake