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
import AddGame from "./pages/AddGame";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={GamesDashboard} />
              <Route exact path="/add-game" component={AddGame} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/games/:id" component={GameDetail} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
