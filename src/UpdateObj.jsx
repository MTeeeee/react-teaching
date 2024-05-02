import React, { useState } from "react";

const objRaw = { name: "Tony", adresse: "Musterstr. 12" };

function UpdateObj() {
  const [obj, setObj] = useState({ name: "Tony", adresse: "Musterstr. 12" });

  function changeName() {
    const newName = document.getElementById("newName").value;

    setObj((object) => ({ ...object, name: newName }));

    document.getElementById("newName").value = "";
  }

  return (
    <div>
      <h2>
        User: {obj.name} {obj.adresse}
        <input id="newName" type="text" placeholder="Name" />
        <button onClick={changeName}>aktualisiere name</button>
        <br />
        <input type="text" placeholder="Adresse" />
        <button>aktualisiere adresse</button>
        <br />
      </h2>
    </div>
  );
}

export default UpdateObj;
