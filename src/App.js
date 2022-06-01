import React from "react";
import "./scss/styles.scss"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Users from "./components/Users/Users";
import SingUpForm from "./components/Form/SingUpForm";

export default function App() {

  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Users />
        <SingUpForm />
      </main>
    </div>
  )
}