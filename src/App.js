import { Router, Switch, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import history from "./history";

function App() {
  return (
    <Router history={history} basename="/">
      <Container maxWidth="sm">
        <Box textAlign="center">
          <Switch>
            <Route path="/" exact>
              <LogIn />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
