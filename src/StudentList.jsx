
function StudentList({ students, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map(function(student) {
          return (
            <tr key={student.id}>
              <td>{student.nom}</td>
              <td>{student.prenom}</td>
              <td>{student.note}</td>
              <td>
                <button
                  className="delete"
                  onClick={function() {
                    onDelete(student.id);
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StudentList;
