import React, {useEffect, useState} from "react";
import "./scss/styles.scss"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Users from "./components/Users/Users";
import SingUpForm from "./components/Form/SingUpForm";

export default function App() {
  // const [token, setToken] = useState(null);


  // useEffect(() => {
  //   fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
  //     .then(response => response.json())
  //     .then(data => setToken(data.token))
  // }, [])

  return (
    <div className="container">
      <Header />
      <main>
        <Hero/>
        <Users/>
        <SingUpForm/>
      </main>
    </div>
  )
}