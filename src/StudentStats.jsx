
function StudentStats({ students }) {
  const total = students.length;

  if (total === 0) {
    return <p>Aucun étudiant</p>;
  }

  let somme = 0;

  for (let i = 0; i < total; i++) {
    somme += students[i].note;
  }

  let moyenne = somme / total;

  return (
    <div className="stats">
      <p>Nombre d'étudiants : {total}</p>
      <p>Moyenne générale : {moyenne.toFixed(2)}/20</p>
    </div>
  );
}

export default StudentStats;
