import React, { useState } from "react";

function UpdateArray() {
  const [pets, setPets] = useState(["Hund", "Maus", "Katze"]);

  function addPet() {
    const newPet = document.getElementById("userInput").value;

    setPets((pets) => [...pets, newPet]);

    document.getElementById("userInput").value = "";
  }

  return (
    <div>
      <h1>Update Array</h1>
      <input type="text" placeholder="new Pet" id="userInput" />
      <button onClick={addPet}>add Pet</button>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet}</li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateArray;
