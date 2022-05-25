import React from "react";
import logo from "../../image/logo.svg";
import "../Logo/_logo.scss"

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo}
          className="logo__image"
          alt="logo" />
    </div>
  )
}