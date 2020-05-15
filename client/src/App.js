import React from "react";
import LandingPageContainer from "components/LandingPage/LandingPageContainer";
import Header from "components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <LandingPageContainer />
    </div>
  );
}

export default App;
