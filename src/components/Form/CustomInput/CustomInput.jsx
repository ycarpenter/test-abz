import React from "react";
import { useField } from "formik";

export default function CustomInput({ labelPlaceholder, labelHelper, ...props }) {
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