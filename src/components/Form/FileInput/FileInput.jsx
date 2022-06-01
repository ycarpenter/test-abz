import React from "react";
import { useField } from "formik";

export default function FileInput({ labelUpload, labelPlaceholder, ...props }) {
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