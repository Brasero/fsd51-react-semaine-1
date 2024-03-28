import './App.css'
import Computer from "./component/Computer/index.jsx";
import Buttons from "./component/Buttons/index.jsx";

function App() {

    return (
        <div className={'calculatrice'}>
            <div>
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