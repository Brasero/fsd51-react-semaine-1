import {useCalcContext} from "../../context/calcContext.jsx";
function Input() {

    const [state, dispatch] = useCalcContext()

    const {n1, n2} = state;

    const handleChange = (e) => {
        const {value, name} = e.target
        const regex = /^\d+$/
        if(!regex.test(value)) {
            return
        }
        dispatch({
            type: 'set_value',
            payload: {
                name: name,
                value: value
            }
        })
    }

    return (
        <div>
            <label>N1 <input value={n1} onChange={handleChange} name={'n1'} /></label>
            <br/>
            <label>N2 <input value={n2} onChange={handleChange} name={'n2'} /></label>
        </div>
    )
}

export default Input