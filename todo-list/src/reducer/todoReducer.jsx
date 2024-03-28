import {useReducer} from "react";

const initialState = {
    categories: [],
    tasks: [],
    //la propriété filter gardera en mémoire la categorie sélectionnée pour le filtre
    filter: ''
}

const todoReducer = (state, action) => {

    switch(action.type) {

        case 'add_categorie':
            return {
                ...state,
                categories: state.categories.concat([{
                    id:  Date.now(),
                    label: action.payload
                }])
            }

        case 'add_task':
            return {
                ...state,
                tasks: state.tasks.concat([{
                    id: Date.now(),
                    titre: action.payload.titre,
                    categorie: action.payload.categorie,
                    description: action.payload.description,
                    done: false
                }])
            }

        case 'toggle_task':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload) {
                        return {
                            ...task,
                            done: !task.done
                        }
                    } else {
                        return task
                    }
                })
            }

        case 'delete_task':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }

        case 'set_filter':
            return {
                ...state,
                filter: action.payload
            }

        case "delete__categorie":
            //En supprimant une catégorie on supprime également toutes les taches qui lui sont liées
            return {
                ...state,
                tasks: state.tasks.filter(task => task.categorie != action.payload),
                categories: state.categories.filter(cat => cat.id !== action.payload)
            }

        default:
            return state;
    }
}

const useTodoReducer = () => useReducer(todoReducer, initialState)

export default useTodoReducer