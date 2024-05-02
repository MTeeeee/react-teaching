import React from "react";
import style from "./Card.module.css";

function Card(props) {
  return (
    <div className={style.card}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="hotel" />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
