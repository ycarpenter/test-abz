import React from "react";

export default function Logo() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a className="navbar__menu-link"
            href="#">Users</a>
        </li>
        <li className="navbar__menu-item">
          <a className="navbar__menu-link"
            href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  )
}