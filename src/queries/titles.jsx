import { gql } from "@apollo/client";


const GET_TITLES =  gql`
query MyQuery {
    programs {
      name
      id
    }
  }
`;

export default GET_TITLES;