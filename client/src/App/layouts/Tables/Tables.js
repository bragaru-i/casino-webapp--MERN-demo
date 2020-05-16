import React, { Fragment } from 'react';

// import for TABLES => displaying only table
import LeftPanelTables from '../../components/LeftPanel/LeftPanelTables';
import RightPanelTables from '../../components/RightPanel/RightPanelTables';

import TopPanelTableId from './../../components/TopPanel/TopPanelTableId';

const Tables = ({ match }) => {
  return (
    <Fragment>
      <div className="left-container">
        <LeftPanelTables />
      </div>
      <div className="right-container">
        {/* <TopPanelTables /> */}
        <TopPanelTableId />
        <RightPanelTables />
      </div>
    </Fragment>
  );
};

export default Tables;
