import "./App.scss";
import logo from "./GDC_logo_2.png"
// import TaskTracker from "./TaskTracker/TaskTracker";
import Home from "./Home/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import {HashLink as NavLink} from "react-router-hash-link";
import {Link as NavLink} from "react-scroll";

function App() {
  
  return (
    <Router>
      <div className="nav-header row">

        <div className="col nav-logo-col">
          <div className="row nav">
            <nav>
              <ul>
                <li className="nav-logo">
                  <img width="50px" src={logo} alt="Logo" />
                  <NavLink smooth duration={400} to="about" className="nav-name">
                    Diego Crisanto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="col nav-menu-col">
          <div className="row nav-menu">
            <nav className="">
              <ul>
                <li className="nav-item">
                  <NavLink smooth duration={400} to="about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink smooth duration={400} to="work" activeClassName="active">
                    Works
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink smooth duration={400} to="contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>


      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <div className="row">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
