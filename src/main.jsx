import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "./pages/App";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Program from "./pages/Program";
import Workout from "./pages/Workout"
import Error from "./pages/Error";

import "./index.css";


const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv20kuie000008l64l7412l6/master",
  cache: new InMemoryCache(),
});

export const ThemeContext = createContext(null);

const container = document.getElementById("root");
const root = createRoot(container);

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
  {
    path: "/program/:id",
    element: <Program />,
    errorElement: <Error />,
  },
  {
    path: "/program/workout",
    element: <Workout />,
    errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="dark">
      <ApolloProvider client={client}>
          <RouterProvider router={router}>
              <RouterProvider router={router} /> {/* Main router */}
          </RouterProvider>
      </ApolloProvider>
    </ThemeContext.Provider>
  </React.StrictMode>
);
