import {useState} from 'react';

function Button () {

    const [num, setNum] = useState(0)

    return (
        <>
            {num}
            <button onClick={() => {
                setNum(num + 1)
                console.log(num)
            }}>Click Me</button>
            {num}
        </>
    )
}

export default Button;