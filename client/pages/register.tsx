import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useFormik, ErrorMessage } from "formik";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { getGraphQLUserRegisterError } from "../utils/getGraphQLUserRegisterError";
import Router from "next/router";
import Input from "../components/Input";
import { userDetailsCard } from "../styles/userDetailsCard";
import { buttonStyle } from "../styles/buttonStyle";
jsx;

const REGISTER_USER = gql`
  mutation($email: String!, $password: String!) {
    createUser(data: { email: $email, password: $password }) {
      id
      email
    }
  }
`;

const Register = () => {
  const [registerUser, { data }] = useMutation(REGISTER_USER);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: ({ email, password }, { setErrors }) => {
      registerUser({
        variables: {
          email,
          password
        }
      })
        .then(({ data: { createUser } }) => {
          console.log(createUser);
          Router.push("/login");
        })
        .catch(responseErrors => {
          setErrors(getGraphQLUserRegisterError(responseErrors));
        });
    }
  });

  return (
    <div css={userDetailsCard}>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {/* <ErrorMessage name="password" /> */}
        <button css={buttonStyle} type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Register;
