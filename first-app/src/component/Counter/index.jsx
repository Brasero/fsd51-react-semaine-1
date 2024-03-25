import {useState} from 'react';
const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleClick}>+1</button>
        </div>
    );
};

export default Counter;