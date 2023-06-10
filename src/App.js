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
              <Link to="/travel/posts">Post Data</Link>
            </li>
            <li>
              <Link to="/travel/posts">Retrieve Data</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/travel/posts">
            <PostData />
          </Route>
          <Route path="/travel/posts">
            <GetData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;