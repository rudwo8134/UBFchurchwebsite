import { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import {Switch, Route} from 'react-router-dom'
import Layout from "./Components/Layout/Layout";

// pages 
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Layout/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
