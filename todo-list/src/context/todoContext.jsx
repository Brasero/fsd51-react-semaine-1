import {createContext, useContext} from "react";
import useTodoReducer from "../reducer/todoReducer.jsx";

const todoContext = createContext()

export const useTodoContext = () => useContext(todoContext)

const TodoContextProvider = ({children}) => {

    const [state, dispatch] = useTodoReducer()

    return (
        <todoContext.Provider value={{state, dispatch}}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider;