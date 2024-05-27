import { gql } from "@apollo/client";

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      duration
      description
      difficulty
      focus

      workoutsWithDay {
        id
        day
        workout {
          name
          duration
          exercises {
            ... on ExerciseWithDuration {
              id
            }
            ... on ExerciseWithReps {
              id
            }
          }
        }
      }
      workouts {
        category
        id
      }
    }
  }
`;

export default GET_PROGRAM;
