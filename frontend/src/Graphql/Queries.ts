import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
query getAllStudents($name: String, $cpf: String, $email: String) { 
  getAllStudents(name: $name, cpf: $cpf, email: $email) {
    id
    name
    email
    cpf
  }
}
`;