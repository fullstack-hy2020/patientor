import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import { apiBaseUrl } from "./constants";

import PatientListPage from "./PatientListPage";

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get<void>(
      `${apiBaseUrl}/ping`
    );
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/" render={() => <PatientListPage />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
