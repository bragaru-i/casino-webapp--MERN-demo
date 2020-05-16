import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './layouts/Home/Home';
import Tables from './layouts/Tables/Tables';
import './App.css';
import TableById from './layouts/TableById/TableById';

function App(props) {
  return (
    <Router>
      <div className="app-container">
        <Route exact path="/" component={Home}></Route>
        <Switch>
          <Route exact path="/tables" component={Tables}></Route>
          <Route path="/tables/:tableId" component={TableById}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
