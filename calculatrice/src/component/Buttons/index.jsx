import NumberButton from "../NumberButton/index.jsx";
import CalcButton from "../CalcButton/index.jsx";

const Buttons = () => {
    return (
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <NumberButton/>
            <CalcButton/>
        </div>
    );
};

export default Buttons;