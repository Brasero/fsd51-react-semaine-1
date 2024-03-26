import {useReducer} from "react";


const initialState = {
    value: "",
    list: []
}

const shopReducer = (state, action) => {
    switch(action.type) {
        case 'set_value':
            return {
                ...state,
                value: action.payload
            }

        case 'add_item':
            return {
                ...state,
                value: '',
                list: state.list.concat([state.value.trim()]) // == [...state.list, state.value]
            }


        default:
            return state;
    }
}
const useShopReducer = () => useReducer(shopReducer, initialState)

export default useShopReducer;