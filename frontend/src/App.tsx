
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {Route , BrowserRouter , Switch} from 'react-router-dom'

import "./App.css";
// import CreateUser from "./Components/CreateUser";
import ListStudents from "./Components/ListStudents";
import NewStudent from "./Components/NewStudent";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3002/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <BrowserRouter>
        <Switch>
          <ApolloProvider client={client}>          
            <Route path='/' exact component={ListStudents} />
            <Route path='/register' exact component={NewStudent} />          
          </ApolloProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;