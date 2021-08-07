import { Fragment, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import {Switch, Route, Redirect} from 'react-router-dom'
import Layout from "./Components/Layout/Layout";

// pages 
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Sunday from "./Pages/Sunday";

// current user
import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from './Redux/User/User.selector'
import { checkUsersession } from "./Redux/User/User.action";
import { connect } from "react-redux";
import Signup from "./Pages/Signup";


import Sundaylist from "./Pages/Sundaylist";
import Broucherdisplay from "./Components/Sunday/Broucherdisplay";
import Biblestudy from "./Pages/Biblestudy";



function App(props) {
    const { currentUser, CheckUserSession } = props;
  useEffect(() => {
    CheckUserSession();
  }, [CheckUserSession]);
  return (
    <Fragment>
      <GlobalStyle />
      <Layout />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sunday">
          <Sundaylist />
        </Route>
        <Route exact path="/sunday/post">
          <Sunday />
        </Route>
        <Route
          exact
          path="/sunday/:id"
          render={({ match }) => <Broucherdisplay match={match} />}
        ></Route>
        <Route exact path="/bible">
          <Biblestudy/>
        </Route>
        <Route
          exact
          path="/register"
          render={() => (!currentUser ? <Signup /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/Sign-in"
          render={() => (!currentUser ? <Signin /> : <Redirect to="/" />)}
        />
      </Switch>
    </Fragment>
  );
}

const mapstatetoprops = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapdispatchtoprops = (dispatch) => ({
  CheckUserSession: () => dispatch(checkUsersession()),
});

export default connect(mapstatetoprops, mapdispatchtoprops)(App);
