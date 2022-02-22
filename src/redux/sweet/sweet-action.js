import {Buy_Sweets,Buy_Custom_Sweets} from "./sweet-types";
const buySweets = () => {
    return {
        type:Buy_Sweets
    }
}

const buyCustomSweets = (payload) => {
    return {
        type:Buy_Custom_Sweets,
        payload:payload
    }
}

export {buySweets,buyCustomSweets};