import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const LOGIN = gql`
query($email: String, $password: String) {
    login(email: $email,password: $password)
  }
`

interface tokenData {
    token: string;
}
interface loginVars {
    email: string;
    password: string;
}


const LoginForm = () => {
    const login = (email: string, password: string) => {
        // console.log({ email, password });
        const { loading, data } = useQuery<tokenData, loginVars>(
            LOGIN,
            { variables: { email, password } }
        );
        console.log({ loading, data })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        login(email, password);
    }
    return (<div>
        <form className="login-form" onSubmit={handleSubmit}>
            <label>
                Username:
                <input name="email" type="text" />
            </label>
            <label>
                Password:
                <input name="password" type="password" />
            </label>
            <input type="submit" value="Submit" />
        </form >
    </div>
    );
}

export default LoginForm;