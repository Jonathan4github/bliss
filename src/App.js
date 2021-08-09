import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages";

const App = () => (
  <Router>
    <Route exact path="/">
      <Redirect to="/questions" />
    </Route>
    <Route component={HomePage} exact path="/questions" />
  </Router>
)

export default App;
