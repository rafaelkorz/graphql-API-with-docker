import { gql } from "@apollo/client";

export const CREATE_STUDENT = gql`
  mutation createStudent($name: String!, $cpf: String!, $email: String!) {
    createStudent(name: $name, cpf: $cpf, email: $email) {
      id
      name
      cpf
      email
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation updateStudent(
    $id: Int!
    $name: String!
    $cpf: String!
    $email: String!
  ) {
    updateStudent(
      id: $id
      name: $name
      cpf: $cpf
      email: $email
    ) {
      message
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation deleteStudent($id: Int!) {
    deleteStudent(id: $id) {
      message
    }
  }
`;
