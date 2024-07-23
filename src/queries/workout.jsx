import { gql } from "@apollo/client";

const GET_WORKOUT = gql`
  query GetWorkout($id: ID!, $day: Int!) {
    program(where: { id: $id }) {
      workoutsWithDay(where: { day: $day }) {
        workout {
          id
          exercises {
            ... on ExerciseWithReps {
              id
              reps
              exercise {
                name
                type
              }
            }
            ... on ExerciseWithDuration {
              id
              duration
              exercise {
                type
                name
              }
            }
          }
          name
          duration
          category
        }
      }
    }
  }
`;

export default GET_WORKOUT;
