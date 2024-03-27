import './App.css'
import Input from "./component/Input/index.jsx";
import useCalcReducer from "./reducer/calcReducer.jsx";
import Buttons from "./component/Buttons/index.jsx";
import Display from "./component/Display/index.jsx";
import {useEffect, useState} from "react";

function App() {

    const [state, dispatch] = useCalcReducer()
    const [message, setMessage] = useState('')
    useEffect(() => {
        if(state.count >= 11) {
            setMessage("Vous avez fait 10 calculs")
        }
    }, [state.count])

    return (
        <>
            {
                message !== '' && <span>{message}</span>
            }
            <Display state={state} />
            <Input state={state} dispatch={dispatch}/>
            <Buttons state={state} dispatch={dispatch} />
        </>
    )
}

export default App