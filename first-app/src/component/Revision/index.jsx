import './revision.scss';
import {useEffect} from "react";
import useExempleReducer from "../../reducer/useExempleReducer.jsx";
import PropTypes from "prop-types";

const Revision = ({ step = 1 }) => {

    const [state, dispatch] = useExempleReducer()

    const increment = () => {
        dispatch({
            type: 'increment',
            payload: {
                step
            }
        })
    }

    const decrement = () => {
        if(state.counter === 0) {
            dispatch({
                type: 'set_message',
                payload: {
                    message: 'Impossible de décrémenter'
                }
            })
            return
        }
        dispatch({
            type: 'decrement',
            payload: {
                step
            }
        })
    }

    const reset = () => {
        dispatch({
            type: 'reset'
        })
    }

    useEffect(() => {
        if(state.counter >= 10) {
            dispatch({
                type: 'addCycle'
            })
        }
    }, [state.counter])

    return (
        <>
            {
                state.message !== "" && <div>{state.message}</div>
            }
            <div className={'red'}>
                {state.counter}
            </div>
            <div>
                {state.cycle}
            </div>
            <div>
                <button onClick={increment}>+{step}</button>
                <button onClick={decrement}>-{step}</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    )

}

Revision.propTypes = {
    step: PropTypes.number
}

export default Revision;