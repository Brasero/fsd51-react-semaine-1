import './App.css'
import List from './component/List.jsx';
import Button from './component/Button.jsx';

function App() {

    const items = [1,4,5]

  return (
      <>
          <List list={items} />
          <Button />
      </>
  )
}

export default App