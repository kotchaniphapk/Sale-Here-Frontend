import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink,
} from "@apollo/client";

//config strpi graphql

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:1337/graphql" }),
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Messages {
        messages {
          data {
            id
            attributes {
              user
              message
            }
          }
        }
      }
    `,
  })
  .then((result) => console.log(result))
  .catch((e) => console.log("apollo err", e));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
document.getElementById("root"));

serviceWorker.unregister();
