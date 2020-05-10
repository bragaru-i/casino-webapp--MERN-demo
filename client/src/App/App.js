import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//  for HOME page
import RightPanelHome from './RightPanel/pages/RightPanelHome';
import LeftPanelHome from './LeftPanel/pages/LeftPanelHome';
import TopPanelHome from '../App/TopPanel/pages/TopPanelHome';

// for TABLES PANEL
import RightPanelTables from './RightPanel/pages/RightPanelTables';
import LeftPanelTables from './LeftPanel/pages/LeftPanelTables';
import TopPanelTables from './TopPanel/pages/TopPanelTables';

//  for individual tab;e
import RightPanelTable from './RightPanel/pages/RightPanelTable';
import LeftPanelTable from './LeftPanel/pages/LeftPanelTable';
import TopPanelTable from './TopPanel/pages/TopPanelTable';

import './App.css';

function App(props) {
  return (
    <Router>
      <div className="app-container">
        <Route exact path="/">
          <LeftPanelHome />
          <div className="right-container">
            <RightPanelHome />
            <TopPanelHome />
          </div>
        </Route>
        <Route path="/tables">
          <LeftPanelTables />
          <RightPanelTables />
          <TopPanelTables />
        </Route>
        <Route exact path="/table/:tableId">
          <LeftPanelTable />
          <TopPanelTable />
          <RightPanelTable />
        </Route>
      </div>
    </Router>
  );
}

export default App;
