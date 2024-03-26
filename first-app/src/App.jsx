import './App.css';
import Counter from "./component/Counter"

function App() {
    //Un component React ne doit rendre qu'une seule balise JSX qui pourra avoir une infinité d'enfant
  return (
      <>
          <Counter />
          <Counter step={2} />
          <Counter step={3} cyclique={true} />
          <Counter binary={true} cyclique={true} />
      </>
  )
}

export default App