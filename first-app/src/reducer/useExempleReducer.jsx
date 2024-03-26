import {useReducer} from "react";

//Objet action :
// {
//     type: string,
//     payload?: any
// }


const initialState = {
    counter: 0,
    cycle: 0
}

function exempleReducer (state, action) {

    switch(action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'addCycle':
            return {
                ...state,
                counter: 0,
                cycle: state.cycle + 1
            }


        default:
            return state;
    }
}

const useExempleReducer = () => {
    return useReducer(exempleReducer, initialState)
}

export default useExempleReducer;