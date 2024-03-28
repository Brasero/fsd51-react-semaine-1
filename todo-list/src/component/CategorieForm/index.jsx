import {useState} from "react";
import {useTodoContext} from "../../context/todoContext.jsx";

const CategorieForm = () => {

    const [label, setLabel] = useState('')
    const {dispatch} = useTodoContext()
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        if(message !== '') {
            setMessage('')
        }
        setLabel(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(label.trim() === '') {
            setMessage("Merci de remplir le champ")
            return
        }
        dispatch({
            type: "add_categorie",
            payload: label.trim()
        })
        setLabel("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter une categorie</h3>
            {
                message !== '' && <span style={{color: 'red'}}>{message}</span>
            }
            <input type="text" value={label} onChange={handleChange} placeholder={'Label'} />
            <input type={'submit'} value={'ajouter'}/>
        </form>
    );
};

export default CategorieForm;