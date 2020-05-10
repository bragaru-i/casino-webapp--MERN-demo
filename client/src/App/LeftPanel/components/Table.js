import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import loadTable from '../../../actions/getTableByIdAction';

const Table = ({ id, loadTable, table }) => {
  useEffect(() => {
    loadTable(id);
  }, [id, loadTable]);
  return <div>hello. table</div>;
};

const mapStateToProps = (state) => ({ table: state.table });
export default connect(mapStateToProps, { loadTable })(Table);

// export default Table;
