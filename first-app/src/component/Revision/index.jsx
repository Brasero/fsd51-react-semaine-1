import './revision.scss';
import {useEffect, useState, useReducer} from "react";
import useExempleReducer from "../../reducer/useExempleReducer.jsx";

const Revision = () => {

    const [state, dispatch] = useExempleReducer()

    const increment = () => {
        dispatch({
            type: 'increment'
        })
    }

    useEffect(() => {
        if(state.counter >= 5) {
            dispatch({
                type: 'addCycle'
            })
        }
    }, [state.counter])

    return (
        <>
            <div className={'red'}>
                {state.counter}
            </div>
            <div>
                {state.cycle}
            </div>
            <div>
                <button onClick={increment}>Click Me</button>
            </div>
        </>
    )

}

export default Revision;