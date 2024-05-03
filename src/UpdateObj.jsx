import React, { useState } from "react";

function UpdateObj() {
  const [obj, setObj] = useState({ name: "Tony", adresse: "Musterstr. 12" });

  function changeName() {
    const newName = document.getElementById("newName").value;
    setObj((o) => ({ ...o, name: newName }));
    document.getElementById("newName").value = "";
  }

  function changeAdress() {
    const newAdress = document.getElementById("newAdress").value;
    setObj((a) => ({ ...a, adresse: newAdress }));
    document.getElementById("newAdress").value = "";
  }

  return (
    <div>
      <hr />
      <h1>Objekte Updaten</h1>
      <h2>
        User: {obj.name} <br />
        Adresse: {obj.adresse}{" "}
      </h2>
      <input id="newName" type="text" placeholder="Name" />
      <button onClick={changeName}>aktualisiere name</button>
      <br />
      <input id="newAdress" type="text" placeholder="Adresse" />
      <button onClick={changeAdress}>aktualisiere adresse</button>
      <br />
      <hr />
    </div>
  );
}

export default UpdateObj;
