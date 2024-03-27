import {useReducer} from "react";

const initialState = {
    n1: '',
    n2: '',
    result: '',
    error: '',
    count: 0
}

function calcReducer (state, action) {

    switch(action.type) {

        case 'set_value':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                error: ''
            }

        case 'addition':
            return {
                ...state,
                result: parseInt(state.n1) + parseInt(state.n2),
                n1: '',
                n2: '',
                error: '',
                count: state.count + 1
            }

        case 'multiply':
            return {
                ...state,
                result: parseInt(state.n1) * parseInt(state.n2),
                n1: '',
                n2: '',
                error: '',
                count: state.count + 1
            }

        case 'reset':
            return initialState;

        case 'set_error':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

const useCalcReducer = () => useReducer(calcReducer, initialState);

export default useCalcReducer;