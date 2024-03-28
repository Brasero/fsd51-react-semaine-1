import './App.css'
import Computer from "./component/Computer/index.jsx";
import Buttons from "./component/Buttons/index.jsx";
import {useCalcContext} from "./context/calcContext.jsx";

function App() {

    const [{error}] = useCalcContext()

    return (
        <div className={'calculatrice'}>
            <div>
                {
                    error !== '' && <span style={{color: 'red'}}>{error}</span>
                }
                <div className={'calculatrice__head'}>
                    <Computer />
                </div>
                <div className={'calculatrice__button__wrapper'}>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default App