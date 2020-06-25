import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignUpPage from "./SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

// const provider = new firebase.auth.GoogleAuthProvider();

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path={"/"} component={SignUpPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
