import React from "react";
import AppState from "./context/background/AppState";
import MainContainer from "./pages/Main/MainContainer";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AppState>
      <div className="container">
        <MainContainer></MainContainer>
      </div>
    </AppState>
  );
};

export default App;
