import React, { Fragment } from 'react';

// import for TABLES => displaying only table
import LeftPanelTables from '../../components/LeftPanel/LeftPanelTables';
import RightPanelTables from '../../components/RightPanel/RightPanelTables';
import TopPanelTables from '../../components/TopPanel/TopPanelTables';

const Tables = ({ match }) => {
  return (
    <Fragment>
      <div className="left-container">
        <LeftPanelTables />
      </div>
      <div className="right-container">
        <TopPanelTables />
        <RightPanelTables />
      </div>
    </Fragment>
  );
};

export default Tables;
