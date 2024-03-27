import {useReducer} from "react";
let id = 1

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
                list: state.list.concat([{
                    id: id++,
                    text: state.value.trim(),
                    done: false
                }]) // == [...state.list, state.value]
            }

        case 'delete_item':
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            }

        case 'reverse_items':
            return {
                ...state,
                list: [...state.list].reverse()
            }

        case "toggle_item":
            return {
                ...state,
                list: state.list.map((item) => {
                    return item.id === action.payload ? {...item, done: !item.done} : item
                })
            }


        default:
            return state;
    }
}
const useShopReducer = () => useReducer(shopReducer, initialState)

export default useShopReducer;