import React from "react";
import "../Navbar/_nav.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a className="navbar__menu-link link"
            href="#">Users</a>
        </li>
        <li className="navbar__menu-item">
          <a className="navbar__menu-link link"
            href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  )
}