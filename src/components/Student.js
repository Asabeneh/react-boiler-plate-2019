import React from 'react';
const Student = (props) => {
    const {firstName, lastName, imgUrl, title, skills} = props.student;
    const skillList = skills.map((skill) => <li key={skill}>{skill}</li>)
    return <div className="student">
        <img src={imgUrl} alt= {firstName} />
        <h4>{firstName.toUpperCase()}</h4>
        <p>{title}</p>
        <details>
        <summary>Skills</summary>
            <ul>
                {skillList}
            </ul>
        </details>
       
    </div>
    
    }

    export default Student;
    
