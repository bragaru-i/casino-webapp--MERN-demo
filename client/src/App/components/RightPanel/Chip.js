import React from 'react';

import './Chip.css';
import chipValue from '../../../utils/float-counter';
import { connect } from 'react-redux';
import patchTransaction from '../../../actions/patchTransaction';

import { useRouteMatch } from 'react-router-dom';
const Chip = ({ chips, type, transactionId, patchTransaction }) => {
  const chipKeys = (chips && Object.keys(chips)) || [];
  console.log(transactionId);
  const match = useRouteMatch();
  return (
    <div className="chip-container">
      <div className="chip-tab-name">{type}</div>
      <div className="chip-items-container">
        {chipKeys.length > 0 &&
          chipKeys.map((key) => (
            <div key={key} className="chip-item-container">
              <div>{chipValue(key)}</div>
              <div>
                <button
                  onClick={() =>
                    patchTransaction(
                      transactionId,
                      { [type]: { [key]: -2 } },
                      match.params.tableId
                    )
                  }
                  className="btn-secondary"
                >
                  -2{' '}
                </button>
                <button
                  onClick={() =>
                    patchTransaction(
                      transactionId,
                      { [type]: { [key]: -1 } },
                      match.params.tableId
                    )
                  }
                  className="btn-secondary"
                >
                  -{' '}
                </button>
                <span style={{ padding: '5px', fontWeight: '400' }}>{chips[key]}</span>
                <button
                  onClick={() =>
                    patchTransaction(
                      transactionId,
                      { [type]: { [key]: 1 } },
                      match.params.tableId
                    )
                  }
                  className="btn-secondary"
                >
                  +{' '}
                </button>
                <button
                  onClick={() =>
                    patchTransaction(
                      transactionId,
                      { [type]: { [key]: 2 } },
                      match.params.tableId
                    )
                  }
                  className="btn-secondary"
                >
                  +2{' '}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default connect(null, { patchTransaction })(Chip);
