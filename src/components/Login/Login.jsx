import React from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("form data", values); //I leave this for the useState case
  fetch("http://localhost:3001/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const validationSchema = Yup.object({
  username: Yup.string().required("Please enter a username!"),
  password: Yup.string().required("Please enter a password!"),
});

export function Login() {
  return (
    <>
      <div className="login">
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
                autoComplete="off"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                autoComplete="off"
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
      </div>
    </>
  );
}
