import React, { useState } from "react";

function Likes() {
  const [likes, setLikes] = useState(0);

  function plusLike() {
    setLikes(likes + 1);
  }
  function minusLike() {
    setLikes(likes - 1);
  }

  return (
    <div>
      <h3>Likes: {likes}</h3>
      <button onClick={plusLike}>👍</button>
      <button onClick={minusLike}>👎</button>
    </div>
  );
}

export default Likes;
