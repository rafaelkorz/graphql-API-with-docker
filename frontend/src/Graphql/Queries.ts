import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
query getAllStudents {
  getAllStudents {
    id
    name
    email
    cpf
  }
}
`;