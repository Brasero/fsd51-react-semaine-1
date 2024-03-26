import PropTypes from "prop-types";

function Student({name, notes}) {
    const average = Math.floor((notes.reduce((acc, curr) => acc + curr, 0) / notes.length) * 100) / 100

    return (
        <li>
            <span>Nom : {name}</span>
            {' '}
            <span>Moyenne : {average}</span>
        </li>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.number)
}

export default Student;