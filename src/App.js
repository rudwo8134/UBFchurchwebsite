import { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import {Switch, Route} from 'react-router-dom'
import Layout from "./Components/Layout/Layout";

// pages 
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Sign-in">
          <Signin />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
