import React from 'react';

import MenuBurger from '../../shared/MenuBurger/MenuBurger';
import Table from '../components/Table';

const LeftPanelTable = (props) => {
  return (
    <div className="left-container">
      <MenuBurger link="tables" />
      <div className="tables-container">
        <Table id={props.match.params.tableId} />
      </div>
    </div>
  );
};

export default LeftPanelTable;
