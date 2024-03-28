import {useTodoContext} from "../../context/todoContext.jsx";
import TaskItem from "../TaskItem/index.jsx";

const TaskList = () => {

    const {state: {tasks}} = useTodoContext()

    return (
        <div>
            <h3>Liste des tâches</h3>
            <div>
                {
                    tasks.length > 0 ?
                        tasks.map(task => {
                            return <TaskItem key={task.id} task={task} />
                        })
                        :
                        <span>Aucune tache</span>
                }
            </div>
        </div>
    );
};

export default TaskList;