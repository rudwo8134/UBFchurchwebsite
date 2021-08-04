import { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import {Switch, Route, Redirect} from 'react-router-dom'
import Layout from "./Components/Layout/Layout";

// pages 
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";

// current user
import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from './Redux/User/User.selector'
import { connect } from "react-redux";
function App(props) {
  const {currentUser} = props
  console.log(currentUser)

  return (
    <Fragment>
      <GlobalStyle />
      <Layout />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Sign-in" render={()=> !currentUser ? (<Signin/>): (<Redirect to="/"/>)}/>
      </Switch>
    </Fragment>
  );
}

const mapstatetoprops = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapstatetoprops, null)(App);
