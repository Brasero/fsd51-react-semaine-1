import {useReducer} from "react";

//Objet action :
// {
//     type: string,
//     payload?: any
// }


const initialState = {
    counter: 0,
    cycle: 0,
    message: ""
}

function exempleReducer (state, action) {
    const {payload} = action
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + payload.step,
                message: ""
            }

        case 'addCycle':
            return {
                ...state,
                counter: 0,
                cycle: state.cycle + 1,
                message: ""
            }

        case 'decrement':
            return {
                ...state,
                counter: state.counter - payload.step,
                message: ""
            }

        case "set_message":
            return {
                ...state,
                message: payload.message
            }

        case 'reset':
            return initialState;


        default:
            return state;
    }
}

const useExempleReducer = () => {
    return useReducer(exempleReducer, initialState)
}

export default useExempleReducer;