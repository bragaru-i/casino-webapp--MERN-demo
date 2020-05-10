import React from 'react';

import MenuBurger from '../../shared/MenuBurger/MenuBurger';
import './LeftPanel.css';

const LeftPanel = () => {
  return (
    <div className="left-container">
      <MenuBurger link="tables" />
      <div className="tables-container">{/* <Tables /> */}</div>
    </div>
  );
};

export default LeftPanel;
