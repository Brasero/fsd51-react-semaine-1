import './numberButton.css';
const NumberButton = () => {
    const numbers = [9,8,7,6,5,4,3,2,1,0]

    return (
        <div className={"numberGrid"}>
            {
                numbers.map((num, index) => {
                    return <button key={index}>{num}</button>
                })
            }
        </div>
    );
};

export default NumberButton;