import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getAllTables from '../../../actions/getAllTables';
import TablesItem from './TablesItem';
import Loader from 'react-loader-spinner';

import './Tables.css';

const Tables = ({ tables, getAllTables }) => {
  useEffect(() => {
    getAllTables();
  }, [getAllTables]);

  return (
    <ul className="tables-items">
      {tables.loading === 'loaded' &&
        tables.data.map((table) => (
          <TablesItem name={table.name} id={table._id} key={table._id} />
        ))}
      {tables.loading === 'loading' && (
        <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
      )}
    </ul>
  );
};
Tables.propType = {
  tables: PropTypes.object.isRequired,
  getAllTables: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ tables: state.allTables });
export default connect(mapStateToProps, { getAllTables })(Tables);
