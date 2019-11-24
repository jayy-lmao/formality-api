import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useFormik } from "formik";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import Input from "../components/Input";
import { userDetailsCard } from "../styles/userDetailsCard";
import { buttonStyle } from "../styles/buttonStyle";
jsx;

const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const Login = () => {
  const [loginUser, { data }] = useMutation(LOGIN_USER);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: ({ email, password }) => {
      console.log({ email, password });
      loginUser({
        variables: {
          email,
          password
        }
      })
        .then(res => {
          console.log(res);
          Router.push("/");
        })
        .catch(error => console.error(error));
    }
  });

  return (
    <div css={userDetailsCard}>
      <h1>Login User</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <Input
          label="Email"
          required
          name="email"
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          required
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          // error="Must be more than 5 characters long"
        />
        <button css={buttonStyle} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
