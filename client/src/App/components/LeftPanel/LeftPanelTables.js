import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getTables from '../../../actions/getAllTables';
import { connect } from 'react-redux';
import MenuBurger from '../../shared/MenuBurger/MenuBurger';
import getAllTables from '../../../actions/getAllTables';

const LeftPanelTables = ({ tables, getAllTables }) => {
  useEffect(() => {
    getAllTables();
  }, []);
  let tablesArr = tables.data;
  return (
    <Fragment>
      <MenuBurger link="tables" />
      <div className="left-list-container">
        <ul className="list-container">
          {tables.loading === 'loaded' &&
            tablesArr.map((table) => (
              <li key={table.id} className="list-table-item">
                <Link to={`/tables/${table.id}`}> {table.name} </Link>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ tables: state.allTables });
export default connect(mapStateToProps, { getAllTables })(LeftPanelTables);
