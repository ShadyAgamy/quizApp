import { HashRouter as Router , Switch, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

import history from "./history";

function App() {
  return (
    <Router history={history} basename="/">
          <Switch>
            <Route path="/" exact>
              <LogIn />
            </Route>
            <Route path="/exam">
              <Questions />
            </Route>
            <Route path="/result">
              <FinalScreen />
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
