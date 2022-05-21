import React from "react";
import "../User/_user.scss";

export default function User(props) {
  return (
    <div className="user">
      <img src={props.photo} alt="user cover" className="user__img" />
      <h4 className="user__name">{props.name}</h4>
      <p className="user__position">{props.position}</p>
      <p className="user__email">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="user__phone">{props.phone}</p>
    </div>
  )
}
