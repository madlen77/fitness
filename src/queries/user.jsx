import { gql } from "@apollo/client";

const GET_USER = gql`
query MyQuery($email : String!){
  appUser(where: {email: $email}) {
    currentDay
    currentProgram {
      id
      name
    }
    email
    id
    name
    password
  }
}
`

export default GET_USER;