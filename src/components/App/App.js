import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import EditProfile from "../EditProfile";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/edit-profile">Edit Profile</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/edit-profile">
          <EditProfile />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
