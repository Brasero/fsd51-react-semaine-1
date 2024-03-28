import PropTypes from "prop-types";
import {useTodoContext} from "../../context/todoContext.jsx";
import './taskItem.scss';

const TaskItem = ({task}) => {

    const {state: {categories}, dispatch} = useTodoContext()
    const cat = categories.find((cat) => cat.id == task.categorie)

    const handleToggle = () => {
        dispatch({
            type: 'toggle_task',
            payload: task.id
        })
    }

    const handleDelete = () => {
        dispatch({
            type: 'delete_task',
            payload: task.id
        })
    }

    return (
        <div className={"task"}>
            <div>
                <input type={"checkbox"} className={"task__checkbox"} onChange={handleToggle} checked={task.done}/>
                <span className={`task__title ${task.done && 'done'}`}>{task.titre}</span>
            </div>
            {
                task.description !== '' && <span className={'task__description'}>{task.description}</span>
            }
            <span className={"task__label"}>{cat.label}</span>
            <button onClick={handleDelete} className={"task__deleteButton"}>X</button>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        titre: PropTypes.string,
        categorie: PropTypes.string,
        description: PropTypes.string,
        done: PropTypes.bool
    })
}

export default TaskItem;