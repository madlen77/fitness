import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://app-eu-central-1-shared-euc1-02.hygraph.com/b213aedad3c542259ea363c49056219a/master',
  cache: new InMemoryCache(),
});
client

  .query({
    query: gql`
      query GetLocations {
        locations {
          id

          name

          description

          photo
        }
      }
    `,
  })

  .then((result) => console.log(result));

import App from "./pages/App";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/Browse",
    element: <Browse />,
    errorElement: <Error />,
  },
  {
    path: "/Profile",
    element: <Profile />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
