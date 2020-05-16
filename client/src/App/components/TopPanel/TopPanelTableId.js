import React from 'react';
import { connect } from 'react-redux';
import chipValue from '../../../utils/float-counter';
import './TopPanelTableId.css';
import moment from 'moment';

const TopPanelTableId = ({ table }) => {
  console.log(table);
  const float = table.loading === 'loaded' && table.data.table.float;
  let floatKeys = Object.keys(float);
  return (
    <div className="top-panel-container">
      <div className="top-panel-float-container">
        <div className="top-panel-tabname">
          Float for {table.loading === 'loaded' ? table.data.table.name : null}
        </div>
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
        <div>
          <div>
            <span> Game Logs</span>
          </div>
          <div>Count</div>
          <div>
            <select className="select-css">
              <option>Select a Game</option>
              <option>American Roulette</option>
              <option>Black Jack</option>
              <option>Russian Poker</option>
              <option>Trio Poker</option>
              <option>Ultimate Poker</option>
              <option>Texas Poker</option>
              <option>Carribean Poker</option>
            </select>
          </div>
        </div>
        <div>
          <div
            style={{
              paddingRight: '0.5rem',
              alignItems: 'baseline',
              justifyContent: 'flex-end',
            }}
          >
            {moment().format('LT')}
          </div>
          <div>Search</div>
          <div>Exchange</div>
        </div>
      </div>
    </div>
  );
};

const mapToStateProps = (state) => ({ table: state.table });
export default connect(mapToStateProps)(TopPanelTableId);
