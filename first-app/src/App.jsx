import './App.css';
import ClassComponent from './component/ClassComponent';
import FuncComponent from './component/FuncComponent';
import Counter from "./component/Counter"

function App() {
    //Un component React ne doit rendre qu'une seule balise JSX qui pourra avoir une infinité d'enfant
  return (
      <>
          <Counter />
      </>
  )
}

export default App