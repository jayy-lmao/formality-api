import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";

interface IUser {
  id: string;
  email: string;
}

interface IUsersData {
  users: IUser[];
}

const GET_USERS = gql`
  query {
    users {
      id
      email
    }
  }
`;

const UserList = () => {
  const { loading, data } = useQuery<IUsersData>(GET_USERS);
  console.log({ loading, data });
  return <p>Im doing the gql</p>;
};

export default UserList;
