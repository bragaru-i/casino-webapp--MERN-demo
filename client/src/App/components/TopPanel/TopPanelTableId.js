import React from 'react';
import { connect } from 'react-redux';
import chipValue from '../../../utils/float-counter';
import './TopPanelTableId.css';
import moment from 'moment';

const TopPanelTableId = ({ table }) => {
  const float = table.loading === 'loaded' && table.data.table.float;
  let floatKeys = Object.keys(float);
  return (
    <div className="top-panel-container">
      <div className="top-panel-float-container">
        <div className="top-panel-tabname">Float for</div>
        <div className="float-container">
          {floatKeys.length > 0 &&
            floatKeys
              .filter((item) => item != '_id')
              .map((chip) => (
                <div key={chip} className="float-chip-container">
                  <div> {chipValue(chip)}</div>
                  <div> {float[chip]}</div>
                  <div> {chipValue(chip) * float[chip] || 0}</div>
                </div>
              ))}
        </div>
      </div>
      <div className="info-display-container">
        <table>
          <tbody>
            <td>
              <tr>
                <button className="btn-primary">
                  <span>Close</span>
                </button>
              </tr>
              <tr>
                <button className="btn-primary green">
                  <span>Count</span>
                </button>
              </tr>
              <tr>
                <button className="btn-primary">
                  <span>Logs</span>
                </button>
              </tr>
            </td>
            <td>
              <tr style={{ textAlignLast: 'end' }}>{moment().format('LT')}</tr>
              <tr>
                <button className="btn-primary">
                  <span>Search</span>
                </button>
              </tr>
              <tr>
                <button className="btn-primary">
                  <span>Exchange</span>
                </button>
              </tr>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapToStateProps = (state) => ({ table: state.table });
export default connect(mapToStateProps)(TopPanelTableId);
