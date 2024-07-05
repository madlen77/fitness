import { gql } from "@apollo/client";

const GET_TITLE = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
    }
  }
`;

export default GET_TITLE;
