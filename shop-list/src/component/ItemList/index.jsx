import Item from "../Item/index.jsx";
import {useShopContext} from "../../context/shopContext.jsx";
function ItemList() {

    const [{list}] = useShopContext()

    return (
        <>
            <h2>Liste de courses</h2>
            <ul>
                {
                    list.map((item, index) => {
                        return <Item item={item} key={index} />
                    })
                }
            </ul>
        </>
    )
}

export default ItemList