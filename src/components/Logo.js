import React from "react";
import logo from "../image/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo}
          className="logo__image"
          alt="logo" />
    </div>
  )
}