import './numberButton.css';
import {useCalcContext} from "../../context/calcContext.jsx";
const NumberButton = () => {
    const numbers = [9,8,7,6,5,4,3,2,1,0]

    const [_, dispatch] = useCalcContext()

    const handleClick = (val) => {
        dispatch({
            type: 'changeCurrent',
            payload: val
        })
    }

    return (
        <div className={"numberGrid"}>
            {
                numbers.map((num, index) => {
                    return <button onClick={() => handleClick(num)} key={index}>{num}</button>
                })
            }
        </div>
    );
};

export default NumberButton;