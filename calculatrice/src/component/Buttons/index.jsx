import {useCalcContext} from "../../context/calcContext.jsx";

function Buttons() {

    const [state, dispatch] = useCalcContext()

    const {n1, n2} = state

    const handleCalc = (calcul) => {
        if(n1.length === 0 || n2.length === 0) {
            dispatch({
                type: "set_error",
                payload: "Merci de remplir tout les champs"
            })
            return
        }
        dispatch({
            type: calcul
        })
    }


    return (
        <>
            {
                state.error !== '' && <span style={{color: 'red'}}>{state.error}</span>
            }
            <br/>
            <button onClick={() => handleCalc('addition')}>+</button>
            <button onClick={() => handleCalc('multiply')}>x</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        </>
    )
}

export default Buttons