import React from "react";
import Link from "../Link/Link"
import "../Navbar/_nav.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <Link
            href="#"
            text="Users"
            className="navbar__menu-link link"
          />
        </li>
        <li className="navbar__menu-item">
          <Link
            href="#"
            text="Sign up"
            className="navbar__menu-link link"
          />
        </li>
      </ul>
    </nav>
  )
}