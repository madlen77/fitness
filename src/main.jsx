import React, { createContext, useState, useContext } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import App from "./pages/App";
import Browse from "./pages/Browse";
import Exercise from "./pages/Exercise";
import Profile from "./pages/Profile";
import Program from "./pages/Program";
import Workout from "./pages/Workout";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

import "./index.css";

export const UserContext = createContext();
export const DayContext = createContext();
export const ProgramContext = createContext();
export const NameContext = createContext();
export const WorkoutContext = createContext();
export const ThemeContext = createContext(null);

const PrivateRoute = ({ children }) => {
  const { email } = useContext(UserContext);

  if (!email) {
    // Redirect to login if not logged in
    return <Navigate to="/Login" />;
  }

  return children;
};

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv20kuie000008l64l7412l6/master",
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/Browse",
    element: <Browse />,
    errorElement: <Error />,
  },
  {
    path: "/Profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/program/:id",
    element: <Program />,
    errorElement: <Error />,
  },
  {
    path: "/program/:programId/workout/:workoutId/:day",
    element: (
      <PrivateRoute>
        <Workout />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/workout/:workoutId/:exercise",

    element: (
      <PrivateRoute>
        <Exercise />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
]);

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [name, setName] = useState(null);
  const [currentWorkout, setWorkout] = useState(null);

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <DayContext.Provider value={{ currentDay, setCurrentDay }}>
        <ProgramContext.Provider value={{ currentProgram, setCurrentProgram }}>
          <NameContext.Provider value={{ name, setName }}>
            <WorkoutContext.Provider value={{ currentWorkout, setWorkout }}>
              {children}
            </WorkoutContext.Provider>
          </NameContext.Provider>
        </ProgramContext.Provider>
      </DayContext.Provider>
    </UserContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="dark">
      <ApolloProvider client={client}>
        <AppProvider>
          <RouterProvider router={router}>
            <RouterProvider router={router} /> {/* Main router */}
          </RouterProvider>
        </AppProvider>
      </ApolloProvider>
    </ThemeContext.Provider>
  </React.StrictMode>
);