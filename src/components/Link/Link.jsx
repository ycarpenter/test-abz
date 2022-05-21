import React from "react"
import "../Link/_links.scss"

export default function Link(props) {
  return (
    <a className={props.className}
      href="#">{props.text}</a>
  )
}

