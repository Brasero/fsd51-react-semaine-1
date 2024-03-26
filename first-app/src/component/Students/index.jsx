import PropTypes from "prop-types";
import Student from "../Student/index.jsx";

function Students () {
    const students = [
        { notes: [12, 11, 10], name: "Alan" },
        { notes: [18, 10, 19], name: "Alice" },
        { notes: [10, 9, 11], name: "Bernard" },
        { notes: [11, 17, 19], name: "Sophie" },
    ];
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {
                    students.map((student, index) => {
                        return <Student {...student} key={index} />
                    })
                }
            </ul>
        </div>
    );
}



export default Students;