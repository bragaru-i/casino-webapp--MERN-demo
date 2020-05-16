import React from 'react';
import './TopPanelTableId.css';

const TopPanel = () => {
  return (
    <div className="top-panel-container">
      <div className="top-panel-float-container">
        <div className="top-panel-tabname">Select a table to inspect</div>
        <div className="float-container"></div>
      </div>
      <div style={{ height: '95%' }} className="info-display-container">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default TopPanel;
