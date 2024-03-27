import './App.css'
import AddItem from "./component/AddItem/index.jsx";
import ItemList from "./component/ItemList/index.jsx";
import useShopReducer from "./reducer/useShopReducer.jsx";
function App() {

    const [state, dispatch] = useShopReducer()

    const handleReverse = () => {
        dispatch({
            type: 'reverse_items'
        })
    }

  return (
    <>
      <AddItem value={state.value} dispatch={dispatch} />
        <button onClick={handleReverse}>Inverser la liste</button>
      <ItemList list={state.list} dispatch={dispatch} />
    </>
  )
}

export default App