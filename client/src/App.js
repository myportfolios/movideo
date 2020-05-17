import React, { Fragment } from "react";
import LandingPageContainer from "components/LandingPage/LandingPageContainer";
import Header from "components/Header/Header";
import RecentMoviesContainer from "components/RecentMovies/RecentMoviesContainer";
import AtCinemasContainer from "components/AtCinemas/AtCinemasContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route path="/" exact component={LandingPageContainer} />
          <Route path="/recent-movies" component={RecentMoviesContainer} />
          <Route path="/at-cinemas" component={AtCinemasContainer} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
