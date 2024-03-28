import PropTypes from "prop-types";
import {useTodoContext} from "../../context/todoContext.jsx";
const CategorieItem = ({cat}) => {

    const {dispatch} = useTodoContext()

    const handleDelete = () => {
        dispatch({
            type: 'delete__categorie',
            payload: cat.id
        })
    }

    return (
        <div style={{display: "flex", gap: '5px'}}>
            <span>{cat.label}</span>
            <button onClick={handleDelete}>X</button>
        </div>
    );
};

CategorieItem.propTypes = {
    cat: PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string
    })
}

export default CategorieItem;