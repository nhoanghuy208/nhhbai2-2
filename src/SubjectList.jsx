import React from "react";

function SubjectsList(props) {
    return(
        <div className="subjects-container">
            <h2 className="subjects-title">Danh sách môn học</h2>
            <ul className="subjects-list">
                {props.subjects.map((subjects, index) => (
                <li className="subjects-item" key={index}>
                {subjects}
                </li>
            ))}
        </ul>
    </div>
    );
}
export default SubjectsList;