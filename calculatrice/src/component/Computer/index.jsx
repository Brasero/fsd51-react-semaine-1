import './computer.css';
import {useCalcContext} from "../../context/calcContext.jsx";
const Computer = () => {

    const [state] = useCalcContext()

    return (
        <div className={'computer__wrapper'}>
            <span className="computer__value">
                {state.current}
            </span>
        </div>
    );
};

export default Computer;