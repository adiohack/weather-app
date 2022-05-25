import React from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("form data", values); //I leave this for the useState case
};

const validationSchema = Yup.object({
  username: Yup.string().required("Please enter a username!"),
  password: Yup.string().required("Please enter a password!"),
});

export function Login() {
  return (
    <>
      <h1>Welcome to login page</h1>
      <h2>Now lets get logged in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <Button variant="contained" type="submit" className="btn">
            Login
          </Button>
          <div>
            <Button
              variant="contained"
              color="secondary"
              href="/"
              className="btn"
            >
              Go back
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
