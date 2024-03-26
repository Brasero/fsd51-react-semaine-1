import PropTypes from "prop-types";
function ItemList({list}) {

    return (
        <>
            <h2>Liste de courses</h2>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

ItemList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string)
}

export default ItemList