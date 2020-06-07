import React, { Fragment } from "react";
import LandingPageContainer from "components/LandingPage/LandingPageContainer";
import HeaderContainer from "components/Header/HeaderContainer";
import RecentMoviesContainer from "components/RecentMovies/RecentMoviesContainer";
import AtCinemasContainer from "components/AtCinemas/AtCinemasContainer";
import OscarsContainer from "components/Oscars/OscarsContainer";
import LoginRegistrationPage from "components/LoginRegistrationPage/LoginRegistrationPage";
import CollectionsContainer from "components/Collections/CollectionsContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
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
          <Route exact path="/oscars/:oscarsYear" component={OscarsContainer} />
          <Route exact path="/login" component={LoginRegistrationPage} />
          <Route
            exact
            path="/my-collections"
            component={CollectionsContainer}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
