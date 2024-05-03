import React, { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    { name: "Mike Tyson", kurs: "Töpfern", email: "mike.tyson@gmail.com" },
    { name: "Tony Stark", kurs: "AI-Dummies", email: "tony.stark@gmail.com" },
    { name: "Chuck Norris", kurs: "MMA", email: "gmail@chucknorris.com" },
  ]);

  function addStudent() {
    const newName = document.getElementById("newName").value;
    const newKurs = document.getElementById("newKurs").value;
    const newEmail = document.getElementById("newEmail").value;
    const newStudent = { name: newName, kurs: newKurs, email: newEmail };

    setStudents((s) => [...s, newStudent]);

    document.getElementById("newName").value = "";
    document.getElementById("newKurs").value = "";
    document.getElementById("newEmail").value = "";
  }
  return (
    <div>
      <h1>Update Array of Objects</h1>
      <input id="newName" type="text" placeholder="name" />
      <br />
      <input id="newKurs" type="text" placeholder="kurs" />
      <br />
      <input id="newEmail" type="text" placeholder="email" />
      <br />
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Name: {student.name} <br /> Kurs: {student.kurs} <br /> Email:{" "}
            {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
