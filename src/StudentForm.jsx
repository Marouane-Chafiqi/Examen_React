
import { useState } from "react";

function StudentForm({ onAdd }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nom === "" || prenom === "") {
      setError("Le nom et le prénom sont obligatoires");
      return;
    }

    if (note === "" || note < 0 || note > 20) {
      setError("La note doit être comprise entre 0 et 20");
      return;
    }

    const student = {
      id: Date.now(),
      nom: nom,
      prenom: prenom,
      note: Number(note)
    };

    onAdd(student);

    setNom("");
    setPrenom("");
    setNote("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ajouter un étudiant</h3>

      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={function(e) {
          setNom(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Prénom"
        value={prenom}
        onChange={function(e) {
          setPrenom(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Note (0-20)"
        value={note}
        onChange={function(e) {
          setNote(e.target.value);
        }}
      />

      {error !== "" && <p className="error">{error}</p>}

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default StudentForm;
