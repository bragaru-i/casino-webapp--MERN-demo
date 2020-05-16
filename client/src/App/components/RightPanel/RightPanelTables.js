import React from 'react';

const RightPanelTables = () => {
  return (
    <div className="right-panel-container welcome">
      <div className="chip-tab-name"> Welcome to Float app</div>
      <div className="home-container">
        <h5 style={{ margin: '3px' }}>First version of casino float on MERN STACK</h5>
        Client Side Rendering. A SPA app wich fetches data from it's own REST API
        <h5 style={{ marginTop: '10px', marginBottom: '3px' }}>
          Add new players to DATABASE:
        </h5>
        <div>
          <button
            onClick={() => addRandomPlayer()}
            style={{ width: '10rem' }}
            className="btn-primary green"
          >
            <span>ADD to DB</span>
          </button>
          <div>
            <i>
              Using faker.js module to create fake players data with default GOLD CARD
            </i>
          </div>
        </div>
        <h5 style={{ marginTop: '10px', marginBottom: '3px' }}>
          Features included for now{' '}
        </h5>
        <ul style={{ margin: '3px' }}>
          <li>Adding players to table from DB</li>
          <li> Transactions (chip in/out/drop) and exchange in same window</li>
          <li> Players check OUT</li>
        </ul>
        <h5
          style={{ marginTop: '10px', marginBottom: '3px', width: '20em' }}
          className="warning"
        >
          NOT FULLY RESPONSIVE, STILL TESTING
        </h5>
        https://github.com/fargusmd/casino-api
      </div>
    </div>
  );
};

export default RightPanelTables;
