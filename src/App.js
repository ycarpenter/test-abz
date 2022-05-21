import React from "react";
import "./scss/styles.scss"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero/>
      </main>
    </div>
  )
}