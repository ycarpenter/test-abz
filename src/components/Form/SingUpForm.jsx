import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput/CustomInput"
import FileInput from "./FileInput/FileInput";
import * as Yup from "yup";
import "../Form/_form.scss";

export default function SingUpForm() {

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

  // const [token, setToken] = useState(null);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => response.json())
    // .then(data => setToken(data.token))
  }, [])

  const handleSubmit = (values) => {
    console.log(values)
    // fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    //   method: "POST",
    //   body: values,
    //   headers: { 'Token': token }
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }


  return (
    <section className="section" id="sign-up">
      <h2 className="section__heading">Working with POST request</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position: "",
          photo: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be 2 characters or more")
            .max(60, "Must be 60 characters or less")
            .required("Required"),
          email: Yup.string()
            .min(2, "Must be 2 characters or more")
            .max(100, "Must be 100 characters or less")
            .matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, "Invalid email address")
            .required("Required"),
          phone: Yup.string()
            .matches(/^\+]{0,1}380([0-9]{9})$/, "Number should start with +380")
            .required("Required"),
          position: Yup.string()
            .required("Required"),
          photo: Yup.string()
            .required("Required")
        })}
        onSubmit={handleSubmit}
      >

        <Form className="form">
          <CustomInput
            labelPlaceholder="Your name"
            labelHelper=""
            name="name"
            type="text"
            placeholder=" "
          />
          <CustomInput
            labelPlaceholder="Email"
            labelHelper=""
            name="email"
            type="email"
            placeholder=" "
          />
          <CustomInput
            labelPlaceholder="Phone"
            labelHelper="+38(XXX) XXX - XX - XX"
            name="phone"
            type="tel"
            placeholder=" "
          />
          <fieldset className="positions">
            <legend className="positions__title">Select your position</legend>
            {position}
          </fieldset>
          <FileInput
            labelUpload="Upload"
            labelPlaceholder="Upload your photo"
            name="photo"
            type="file"
            accept=".jpg, .jpeg"
          />

          <button
            type="submit"
            className="link link__submit"
          // disabled={!isValid}
          >Sign up</button>

        </Form>
      </Formik>

    </section >
  )
}
