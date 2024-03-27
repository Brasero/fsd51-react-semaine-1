import PropTypes from "prop-types";

function Item({item, dispatch}) {

    const handleDelete = () => {
        dispatch({
            type: "delete_item",
            payload: item.id
        })
    }


    return (
        <li>
            <input type={"checkbox"} checked={true}/>
            {item.text}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
    }),
    dispatch: PropTypes.func
}


export default Item;