import './App.css'
import CategorieForm from "./component/CategorieForm/index.jsx";
import TaskForm from "./component/TaskForm/index.jsx";
import CategorieList from "./component/CategorieList/index.jsx";
import TaskList from "./component/TaskList/index.jsx";
import CategorieFilter from "./component/CategorieFilter/index.jsx";

function App() {

  return (
    <>
        <div className={'top'} style={{display: 'flex'}}>
            <CategorieForm />
            <TaskForm />
        </div>
        <div className={'bottom'}>
            <CategorieList />
            <CategorieFilter />
            <TaskList />
        </div>
    </>
  )
}

export default App