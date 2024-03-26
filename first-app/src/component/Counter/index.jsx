import {useState, useEffect, useRef} from 'react';
const Counter = ({step = 1, cyclique = false, binary = false}) => {

    const MAX = 20
    const [counter, setCounter] = useState(0)
    const timeoutId = useRef(null)
    const [disabled, setDisabled] = useState(false)
    const [cycle, setCycle] = useState(0);

    const start = () => {
        const id = setInterval(() => {
            setCounter((prevState) => prevState + step)
        }, 100)
        timeoutId.current = id
        setDisabled(true)
    }

    const stop = () => {
        if(timeoutId.current !== null) {
            clearInterval(timeoutId.current)
            setDisabled(false)
        }
    }

    useEffect(() => {
        if (counter >= MAX) {
            clearInterval(timeoutId.current)
            setCounter(0)
            if(cyclique) {
                setCycle(cycle + 1)
                start()
            } else {
                setDisabled(false)
            }
        }
    }, [counter])



    return (
        <div>
            {
                cyclique && <span>Cycle : {cycle}</span>
            }
            <div>{binary ? counter.toString(2) : counter}</div>
            <button disabled={disabled} onClick={start}>Start</button>
            <button disabled={!disabled} onClick={stop}>Stop</button>
        </div>
    );
};

export default Counter;