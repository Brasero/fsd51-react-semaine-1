import PropTypes from "prop-types";
import Item from "../Item/index.jsx";
function ItemList({list, dispatch}) {

    return (
        <>
            <h2>Liste de courses</h2>
            <ul>
                {
                    list.map((item, index) => {
                        return <Item item={item} key={index} dispatch={dispatch} />
                    })
                }
            </ul>
        </>
    )
}

ItemList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string),
    dispatch: PropTypes.func
}

export default ItemList