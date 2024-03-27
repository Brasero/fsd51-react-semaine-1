import PropTypes from "prop-types";
function Input({state, dispatch}) {

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

Input.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func
}

export default Input