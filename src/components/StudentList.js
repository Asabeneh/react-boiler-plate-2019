import React from "react";
import Student from "./Student";

const StudentList = ({ students }) => {
  const studentList = students.map((student, i) => (
    <Student key={"student" + i} student={student} />
  ));
  return (
    <div className="student-list">
      <p className="student-list-title title">Some of the students attending React course:</p>
      {studentList}
    </div>
  );
};

export default StudentList;
