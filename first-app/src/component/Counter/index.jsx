import {useState, useEffect} from 'react';
const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [disabled, setDisabled] = useState(true)


    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        if(counter <= 0) {
            setDisabled(true)
            return
        }
        setDisabled(false)
    }, [counter]);



    return (
        <div>
            {
                disabled && <span style={{color: "red"}}>Impossible de décrementé</span>
            }
            <button disabled={disabled} onClick={handleMinus}>-1</button>
            <div>{counter}</div>
            <button onClick={handlePlus}>+1</button>
        </div>
    );
};

export default Counter;