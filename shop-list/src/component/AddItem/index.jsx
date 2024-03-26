import PropTypes from "prop-types";
import {useState} from "react";
import Error from "../Error/index.jsx";
function AddItem({value, dispatch}) {

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const {value: targetValue} = e.target
        dispatch({
            type: 'set_value',
            payload: targetValue
        })
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value.trim() !== '') {
            dispatch({
                type: 'add_item'
            })
            setError('')
        } else {
            setError('Merci de bien remplir le formulaire')
        }
    }

    return (
        <>
            <Error error={error} />
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={'value'} value={value} onChange={handleChange} placeholder={'Item'} />
                <input type={"submit"} value={'Ajouter'} />
            </form>
        </>
    )
}

AddItem.propTypes = {
    value: PropTypes.string,
    dispatch: PropTypes.func
}

export default AddItem