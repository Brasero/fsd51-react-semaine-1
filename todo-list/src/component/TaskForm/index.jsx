import {useState} from "react";
import {useTodoContext} from "../../context/todoContext.jsx";

const TaskForm = () => {

    const {state, dispatch} = useTodoContext()
    const initialState = {
        titre: '',
        description: '',
        categorie: ''
    }

    const [task, setTask] = useState(initialState)
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        const {name, value} = e.target
        setTask({
            ...task,
            [name]: value
        })
        setMessage('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.titre.trim() === '') {
            setMessage('Merci de remplir le champs Titre')
            return
        }
        if(task.categorie === '') {
            setMessage('Merci de sélectionner une catégorie')
            return
        }

        dispatch({
            type: 'add_task',
            payload: {
                ...task,
                description: task.description.trim(),
                titre: task.titre.trim()
            }
        })
        setTask(initialState)
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter une tâche</h3>
            {
                message !== '' && <span style={{color: 'red'}}>{message}</span>
            }
            <input onChange={handleChange} type="text" name={'titre'} placeholder={'Titre'} value={task.titre} />
            <textarea onChange={handleChange} name="description"  cols="30" rows="10" value={task.description} placeholder={'description (optionnel)'} />
            <select onChange={handleChange} name="categorie" value={task.categorie} >
                <option value={''}>---- Categorie ----</option>
                {
                    state.categories.map(cat => {
                        return <option key={cat.id} value={cat.id}>{cat.label}</option>
                    })
                }
            </select>
            <input type="submit" value={'ajouter'}/>
        </form>
    );
};

export default TaskForm;