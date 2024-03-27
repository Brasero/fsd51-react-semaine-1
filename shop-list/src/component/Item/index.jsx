import PropTypes from "prop-types";
import './item.css';
import {useShopContext} from "../../context/shopContext.jsx";

function Item({item}) {

    const [_,dispatch] = useShopContext()

    const handleDelete = () => {
        dispatch({
            type: "delete_item",
            payload: item.id
        })
    }

    const handleToggle = () => {
        dispatch({
            type: "toggle_item",
            payload: item.id
        })
    }


    return (
        <li className={`item ${item.done && "checked"}`}>
            <input type={"checkbox"} onClick={handleToggle} checked={item.done} />
            {item.text}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        done: PropTypes.bool
    })
}


export default Item;