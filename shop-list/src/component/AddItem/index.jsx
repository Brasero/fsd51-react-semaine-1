import {useState} from "react";
import Error from "../Error/index.jsx";
import {useShopContext} from "../../context/shopContext.jsx";
function AddItem() {

    const [error, setError] = useState('')

    const [{value}, dispatch] = useShopContext()

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


export default AddItem