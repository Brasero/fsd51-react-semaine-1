import './App.css'
import Input from "./component/Input/index.jsx";
import Buttons from "./component/Buttons/index.jsx";
import Display from "./component/Display/index.jsx";
import {useEffect, useState} from "react";
import {useCalcContext} from "./context/calcContext.jsx";

function App() {

    const [state] = useCalcContext()
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
            <Display />
            <Input/>
            <Buttons/>
        </>
    )
}

export default App