import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Form/_form.scss";
import Link from "../Link/Link";

export default function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    photo: ""
  })

  const [positions, setPositions] = useState([]);

  const getPositions = async () => {
    const res = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions");
    const data = await res.json();
    setPositions(data.positions);
  }

  const position = positions.map(pos => {
    return <label key={pos.id} className="radio-label">
      <input
        key={pos.id}
        type="radio"
        name="position"
        value={pos.name}
      />{pos.name}
    </label>
  })

  useEffect(() => {
    getPositions()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  console.log(formData)



  return (
    <section className="section" id="sign-up">
      <h2 className="section__heading">Working with POST request</h2>
      <form className="form">
        <label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <input
          type="tel"
          id="tel"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="tel" className="form__tel-label">+38 (XXX) XXX - XX - XX</label>

        <fieldset className="positions">
          <legend className="positions__title">Select your position</legend>
          {position}
        </fieldset>
        <label className="file-label">
          <input
            type="file"
            id="photo"
            value={formData.photo}
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
          />
          <span className="file-upload">Upload</span>
          <span className="file-placeholder">Upload your photo</span></label>
        <Link
          text="Sign up"
          className="submit-link link"
          isDisabled="true"
        />
      </form>
    </section >
  )
}

