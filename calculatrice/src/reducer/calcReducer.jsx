import {useReducer} from "react";
import {calc} from "../utils/function.js";


const initialState = {
    current: 0,
    prev: 0,
    operator: '',
    error: '',
    currentIsResult: false
}

const calcReducer = (state, action) => {

    switch(action.type) {

        case 'changeCurrent':
            return {
                ...state,
                current: state.current === 0 ?
                    action.payload
                    :
                    state.currentIsResult ?
                        action.payload
                        :
                        parseInt(state.current.toString() + action.payload.toString())
                ,
                error: '',
                currentIsResult: false
            }

        case 'setOperator':
            return {
                ...state,
                prev: state.operator === "" ? state.current : calc(state),
                current: 0,
                operator: action.payload,
                error: ''
            }

        case 'equal':
            return {
                ...state,
                prev: 0,
                operator: '',
                current: calc(state),
                error: '',
                currentIsResult: true
            }

        case 'setError':
            return {
                ...state,
                error: action.payload
            }

        case 'reset':
            return initialState;

        default:
            return state;
    }
}

const useCalcReducer = () => useReducer(calcReducer, initialState)

export default useCalcReducer;