import React, { useState } from "react";
import "../Form/_form.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    photo: ""
  })


  return (
    <section className="section">
      <h2 className="section__heading">Working with POST request</h2>
      <form className="form">
        <label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
          />
        </label>
        <input
          type="tel"
          id="tel"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
        />
        <label htmlFor="tel" className="form__tel-label">+38 (XXX) XXX - XX - XX</label>

        <fieldset>
          <legend>Select your position</legend>
          <input
            type="radio"
            id="frontend"
            value="frontend-developer"
            name="position"
          />
          <label htmlFor="frontend">Frontend developer</label>
        </fieldset>
        <label>
          <input
            type="file"
            id="photo"
            value={formData.photo}
            accept=".jpg, .jpeg, .png"
          />
          Upload</label>
      </form>
    </section >
  )
}