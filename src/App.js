import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostData from './components/PostData';
import GetData from './components/GetData';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/post">Post Data</Link>
            </li>
            <li>
            <Link to="/retrieve">Retrieve Data</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/post">
            <PostData />
          </Route>
          <Route path="/retrieve">
            <GetData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;