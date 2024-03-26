import './App.css'
import AddItem from "./component/AddItem/index.jsx";
import ItemList from "./component/ItemList/index.jsx";
import useShopReducer from "./reducer/useShopReducer.jsx";
function App() {

    const [state, dispatch] = useShopReducer()

  return (
    <>
      <AddItem value={state.value} dispatch={dispatch} />
      <ItemList list={state.list} />
    </>
  )
}

export default App