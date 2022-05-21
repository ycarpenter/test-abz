import React from "react"
import Link from "../Link/Link"
import "../Hero/_hero.scss"

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__heading">Test assignment for front-end developer</h1>
      <p className="hero__text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
      <Link
        href="#"
        text="Sign up"
        className="link hero__link"
      />
    </section>
  )
}