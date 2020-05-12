import React, { Fragment } from 'react';
import MenuBurger from '../../shared/MenuBurger/MenuBurger';

const LeftPanel = () => {
  return (
    <Fragment>
      <MenuBurger link="table" />
      <div className="left-list-container"></div>
    </Fragment>
  );
};

export default LeftPanel;
