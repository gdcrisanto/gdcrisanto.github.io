import "./App.css";
import TaskTracker from "./TaskTracker/TaskTracker";
import Home from "./Home/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-menu">
          <ul>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/task-tracker" activeClassName="active">
                Task Tracker App
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/task-tracker">
            <TaskTracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
