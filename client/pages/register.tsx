import React from "react";
import { useFormik } from "formik";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { GraphQLError } from "graphql";

const REGISTER_USER = gql`
    mutation($email: String!, $password: String!) {
        createUser(data: { email: $email, password: $password }) {
            id
            email
        }
    }
`;

const Register = () => {
    const [ registerUser, { data } ] = useMutation(REGISTER_USER);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: ({ email, password }) => {
            registerUser({
                variables: {
                    email,
                    password,
                },
            })
                .then(({ data: { createUser } }) => {
                    console.log(createUser);
                })
                .catch((errorResponse) => {
                    console.log({ gqlErrs: errorResponse.graphQLErrors });
                    if (errorResponse.message.includes("duplicate key error")) {
                        console.error("User Already Exists");
                    }
                    // } else if (errorResponse.graphQLErrors[0].extensions.exception.validationErrors[0].constraints) {
                    //     console.log(Object.values(errorResponse.graphQLErrors[0].extensions.constraints))
                    // }
                });
        },
    });

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">
                    Email address
                    <input
                        name="email"
                        id="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </label>
                <label htmlFor="password">
                    Email address
                    <input
                        name="password"
                        id="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </label>
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
};

export default Register;