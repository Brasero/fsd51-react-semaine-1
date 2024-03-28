import './calcButton.css';
import {useCalcContext} from "../../context/calcContext.jsx";

const CalcButton = () => {

    const [state, dispatch] = useCalcContext()
    const {current, prev, operator} = state

    const handleClick = (operator) => {
        dispatch({
            type: 'setOperator',
            payload: operator
        })
    }

    const handleEqual = () => {
        if(operator === '' || current === 0 || prev === 0) {
            dispatch({
                type: 'setError',
                payload: 'Impossible de faire le calcul.'
            })
            return
        }

        dispatch({
            type: "equal"
        })
    }

    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    return (
        <div className={'calcButton'}>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('*')}>x</button>
            <button onClick={handleEqual}>=</button>
            <button onClick={handleReset}>c</button>
        </div>
    );
};

export default CalcButton;