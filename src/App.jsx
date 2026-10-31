
import { useState } from "react";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
import StudentStats from "./StudentStats";
import "./App.css";

const initialStudents = [
  { id: 1, nom: "Alami", prenom: "Sara", note: 15 },
  { id: 2, nom: "Bennani", prenom: "Youssef", note: 12 },
  { id: 3, nom: "Idrissi", prenom: "Hiba", note: 17 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    const newStudents = students.filter(function(student) {
      return student.id !== id;
    });

    setStudents(newStudents);
  }

  const filteredStudents = students.filter(function(student) {
    return student.nom.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container">
      <h2>Gestion des étudiants</h2>

      <StudentStats students={students} />

      <StudentForm onAdd={addStudent} />

      <h3>Liste des étudiants</h3>

      <input
        className="search"
        type="text"
        placeholder="Rechercher par nom..."
        value={search}
        onChange={function(e) {
          setSearch(e.target.value);
        }}
      />

      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;
