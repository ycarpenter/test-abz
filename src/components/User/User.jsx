import React from "react";
import "../User/_user.scss";

export default function User(props) {
  return (
    <div className="user">
      <img src={props.photo} alt="user cover" className="user__img" />
      <h4 className="user__name" title={props.name}>{props.name}</h4>
      <p className="user__position" title={props.position}>{props.position}</p>
      <p className="user__email" title={props.email ? props.email : 'Lorem ipsum'}>{props.email ? props.email : 'Lorem ipsum'}</p>
      <p className="user__phone" title={props.phone}>{props.phone}</p>
    </div>
  )
}
