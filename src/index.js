import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

//config strpi graphql

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:1337/graphql" }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
