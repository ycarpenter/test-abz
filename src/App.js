import React from "react";
import "./scss/styles.scss"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero/>
        <Users/>
        <Form/>
      </main>
    </div>
  )
}