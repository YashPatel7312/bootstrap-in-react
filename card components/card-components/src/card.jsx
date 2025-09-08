import React from "react";

function Card(props) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem auto",
      maxWidth: "250px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
