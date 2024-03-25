import {useState, useEffect} from 'react';

function FuncComponent() {

    const [state, setState] = useState({
        counter: 1,
        message: "coucou",
        name: "jean"
    });

    const [items, setItems] = useState([])

    const [state2, setState2] = useState({
        counter: 0
    })



    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setItems(json))
        return () => {
            setItems([]);
        }
    }, []);

    useEffect(() => {
        console.log(items)
    }, [items])

    return (
        <div>
            {state.name}
            {state.message}
            {state.counter}
        </div>
    )
}

export default FuncComponent;