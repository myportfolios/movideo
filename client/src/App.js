import React, { Fragment } from "react";
import LandingPageContainer from "components/LandingPage/LandingPageContainer";
import HeaderContainer from "components/Header/HeaderContainer";
import RecentMoviesContainer from "components/RecentMovies/RecentMoviesContainer";
import AtCinemasContainer from "components/AtCinemas/AtCinemasContainer";
import OscarsContainer from "components/Oscars/OscarsContainer";
import LoginRegistrationPage from "components/LoginRegistrationPage/LoginRegistrationPage";
import CollectionsContainer from "components/Collections/CollectionsContainer";
import NoMatch from "components/NoMatch/NoMatch";
import { connect } from "react-redux";
import { notUndefined } from "utilities/utils";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getJWT } from "utilities/utils";
import ProtectedRoute from "components/ProtectedRoute/protectedRoute";
import "./App.css";

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
            {/* {!!notUndefined(isLoggedIn) && (
              <Route
                exact
                path="/my-collections"
                component={CollectionsContainer}
              />
            )}
            <Route component={NoMatch} />{" "} */}
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
