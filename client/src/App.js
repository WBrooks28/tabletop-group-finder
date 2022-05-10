import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import GamesDashboard from "./pages/GamesDashboard";
import GameDetail from "./pages/GameDetail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const games = [
  {
    id: 1,
    name: "Star Wars",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 90,
    playerLimit: 6,
    date: "May 8 2022",
  },
  {
    id: 2,
    name: "Red Dead II",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 90,
    playerLimit: 8,
    date: "May 9 2022",
  },
  {
    id: 3,
    name: "Modern Warfare",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 90,
    playerLimit: 6,
    date: "May 9 2022",
  },
  {
    id: 4,
    name: "Age of Empires",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 90,
    playerLimit: 4,
    date: "May 9 2022",
  },
  {
    id: 5,
    name: "D&D",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 120,
    playerLimit: 4,
    date: "May 10 2022",
  },
  {
    id: 6,
    name: "Forza",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 120,
    playerLimit: 12,
    date: "May 10 2022",
  },
  {
    id: 7,
    name: "Halo Infinite",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    duration: 120,
    playerLimit: 6,
    date: "May 12 2022",
  },
];

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={GamesDashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/games/:id" component={GameDetail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
