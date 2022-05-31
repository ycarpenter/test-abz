import React, { useState, useEffect } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import "../Form/_form.scss";

export default function SingUpForm() {

  const CustomInput = ({ labelPlaceholder, labelHelper, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <label className="form__label">
        {/* <span className={`label__placeholder ${meta.error ? 'error__label' : ''}`}>{labelPlaceholder}</span> */}
        <input className={`${meta.error && meta.touched ? "error__border" : ''}`}
          {...field}
          {...props} />
        <span className="label__placeholder">{labelPlaceholder}</span>
        {meta.touched && meta.error ? (
          <span className="error__helper">{meta.error}</span>
        ) : <span className="label__helper">{labelHelper}</span>}
      </label>
    )
  }
  const FileInput = ({ labelUpload, labelPlaceholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <label className="file-label">
        <div className="file-container">
          <span className="file-upload">{labelUpload}</span>
          <span className="file-placeholder">{labelPlaceholder}</span>
          <input className={`${meta.error ? "error__border" : ''}`}
            {...field}
            {...props} />
        </div>
        {meta.touched && meta.error ? (
          <span className={`${meta.error ? "error__helper" : ''}`}>{meta.error}</span>
        ) : null}
      </label>
    )
  }

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

  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => response.json())
      .then(data => setToken(data.token))
  }, [])

  const handleSubmit = (values) => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: values,
      headers: { 'Token': token }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }


  return (
    <section section className="section" id="sign-up">
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
