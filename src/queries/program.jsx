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
          id
          name
          duration

          exercises {
            ... on ExerciseWithDuration {
              id
              duration
              exercise {
                description
                id
                name
              }
            }
            ... on ExerciseWithReps {
              id
              exercise {
                description
                id
                name
              }
              reps
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
