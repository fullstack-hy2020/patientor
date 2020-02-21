import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import PatientListPage from "./PatientListPage";
import { reducer, StateProvider } from "./state";

const App: React.FC = () => {
  return (
    <StateProvider reducer={reducer}>
      <div className="App">
        <Router>
          <Container>
            <Header as="h1">Patientonator</Header>
            <Button as={Link} to="/" primary>
              Home
            </Button>
            <Divider hidden />
            <Route exact path="/" render={() => <PatientListPage />} />
          </Container>
        </Router>
      </div>
    </StateProvider>
  );
};

export default App;
