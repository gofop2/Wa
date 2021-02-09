import React from "react";

function Card(props) {
  return (
    <div class="contactCard">
      <h2>{props.src.name}</h2>
      <img src={props.src.img} alt={props.src.name} width="200px" />
      <hr />
      Email: <a href={"mailto:" + props.src.email}>{props.src.email}</a>{" "}
      <p>
        Telefon: <b>{props.src.tel} </b>{" "}
      </p>
    </div>
  );
}
export default Card;
