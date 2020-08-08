import React, { Fragment } from "react";
import { connect } from "react-redux";
import store from "store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPageContainer from "components/LandingPage/LandingPageContainer";
import HeaderContainer from "components/Header/HeaderContainer";
import RecentMoviesContainer from "components/RecentMovies/RecentMoviesContainer";
import AtCinemasContainer from "components/AtCinemas/AtCinemasContainer";
import OscarsContainer from "components/Oscars/OscarsContainer";
import LoginRegistrationPage from "components/LoginRegistrationPage/LoginRegistrationPage";
import CollectionsContainer from "components/Collections/CollectionsContainer";
import ProtectedRoute from "components/ProtectedRoute/protectedRoute";
import NoMatch from "components/NoMatch/NoMatch";

import { notUndefined } from "utilities/utils";
import { getJWT } from "utilities/utils";
import { setAuthToken } from "utilities/utils";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "auth/authAction";

import "./App.css";

//get current date
var dateNow = new Date();
//check for token
if (localStorage.token) {
  //Set auth token header auth
  setAuthToken(localStorage.token);
  //decode token and get user details and exp info
  const decoded = jwt_decode(localStorage.token);

  //set user and authenticated
  decoded.exp < dateNow.getTime() && store.dispatch(setCurrentUser(decoded));
}

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <BrowserRouter>
          <header className="App-header">
            <HeaderContainer />
          </header>
          <Switch>
            <Route path="/" exact component={LandingPageContainer} />
            <Route path="/recent-movies" component={RecentMoviesContainer} />
            <Route path="/at-cinemas" component={AtCinemasContainer} />
            <Route
              exact
              path="/oscars/:oscarsYear"
              component={OscarsContainer}
            />
            <Route exact path="/login" component={LoginRegistrationPage} />
            {/* <Route component={NoMatch} />  */}
            <ProtectedRoute>
              <Route
                exact
                path="/my-collections"
                component={CollectionsContainer}
              />
            </ProtectedRoute>
            {/**rendering this component without a path makes it thr go to component for any path/url that doesn't exist */}
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.authenticated
  };
};

export default connect(mapStateToProps, {})(App);
