import "./App.css";
import News from "./components/News/NewsContainer";
import Archivated from "./components/Archivated/ArchivatedContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>       
        <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/news" className="nav-link active" aria-current="page">News</Link>
              </li>
              <li className="nav-item">
              <Link to="/archivated" className="nav-link">Archivated News</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/archivated">
            <Archivated />
          </Route>
          <Redirect from='*' to='/news' />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
