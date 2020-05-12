import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//  import for separate tabel by id

import LeftPanelTableId from '../../components/LeftPanel/LeftPanelTableId';
import TopPanelTableId from '../../components/TopPanel/TopPanelTableId';
import RightPanelTableId from '../../components/RightPanel/RightPanelTableId';
import RightPanelAddPlayer from '../../components/RightPanel/RightPanelAddPlayer';
import RightPanelPlayer from '../../components/RightPanel/RightPanelPlayer';

const TableById = ({ match }) => {
  return (
    <Fragment>
      <div className="left-container">
        <LeftPanelTableId />
      </div>
      <div className="right-container">
        <TopPanelTableId />
        <Switch>
          <Route exact path={`${match.path}`} component={RightPanelTableId} />
          <Route path={`${match.path}/player/:playerId`} component={RightPanelPlayer} />

          <Route path={`${match.path}/addPlayer`} component={RightPanelAddPlayer} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default TableById;
