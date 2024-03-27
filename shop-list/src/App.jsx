import './App.css'
import AddItem from "./component/AddItem/index.jsx";
import ItemList from "./component/ItemList/index.jsx";
import useShopReducer from "./reducer/useShopReducer.jsx";
function App() {


    const handleReverse = () => {
        dispatch({
            type: 'reverse_items'
        })
    }

  return (
    <>
      <AddItem />
        <button onClick={handleReverse}>Inverser la liste</button>
      <ItemList />
    </>
  )
}

export default App