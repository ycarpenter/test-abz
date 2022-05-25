import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import "./_header.scss";



export default function Header() {
  return (
    <header className="header section">
      <Logo />
      <Navbar />
    </header>
  )
}