import {useTodoContext} from "../../context/todoContext.jsx";
import TaskItem from "../TaskItem/index.jsx";

const TaskList = () => {

    //On récupére le filtre
    const {state: {tasks, filter}} = useTodoContext()
    //On créer une nouvelle constante qui contiendra soit toutes les taches,
    //Soit uniquement les taches qui correspondent au filtre s'il y en a un
    const taskToShow = filter === "" ? tasks : tasks.filter((task) => task.categorie === filter)

    return (
        <div>
            <h3>Liste des tâches</h3>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: '5px'
            }}>
                {
                    taskToShow.length > 0 ?
                        taskToShow.map(task => {
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