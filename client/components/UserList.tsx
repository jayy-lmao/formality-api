import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface User {
    id: string,
    email: string,
}

interface UsersData {
    users: User[]
}

const GET_USERS = gql`
query{
    users{
      id
      email
    }
  }
`

const UserList = () => {
    const { loading, data } = useQuery<UsersData>(GET_USERS);
    console.log({loading,data})
    return (<p>Im doing the gql</p>)
}

export default UserList;