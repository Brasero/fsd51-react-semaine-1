import PropTypes from "prop-types";
function Display({state}) {

    return (
        <div>
            {state.result}
        </div>
    )
}

Display.propTypes = {
    state: PropTypes.object
}

export default Display