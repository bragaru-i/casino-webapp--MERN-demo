import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import searchPlayer from '../../../actions/searchPlayerAction';
import patchTable from '../../../actions/patchTable';
import './RightPanelAddPlayer.css';

const RightPanelAddPlayer = ({ results, searchPlayer, match, patchTable }) => {
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    cId: '',
  });
  const { firstName, lastName, cId } = formData;
  const onChange = (e) => {
    let { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    searchPlayer(formData);
  }, [formData]);

  return (
    // FORM->>TEXT=> SEARCH PLAYERS
    <div className="search-box">
      <form onSubmit={(e) => onSubmit(e)}>
        <label>
          <input
            placeholder="First name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label>
          <input
            placeholder="Last name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label>
          <input
            placeholder="casino ID"
            type="text"
            name="cId"
            value={cId}
            onChange={(e) => onChange(e)}
          />
        </label>
      </form>
      {/* Rendering results
       */}
      <div className="search-result-container">
        <div className="search-results">
          <div className="res-item inner-shadow" style={{ height: '2rem' }}>
            <span>Name Surname</span>
            <span>CasinoId</span>
            <span>Avatar</span>
            <span>Country</span>
            <span>LastVisit</span>
            <span>Actions</span>
          </div>
          <div className="res-wrapper">
            {results.loading === 'loaded' &&
              results.results > 0 &&
              results.data.map((player) => (
                <div className="res-item" key={player.id}>
                  <span style={{ paddingLeft: '5px' }}>
                    {player.firstName} {player.lastName}
                  </span>
                  <span>{player.cId}</span>
                  <span>
                    <img
                      src={player.avatar}
                      style={{ paddingTop: '5px' }}
                      alt="Avatar"
                    ></img>
                  </span>
                  <span>{player.country}</span>
                  <span>{player.visits[player.visits.length - 1].slice(0, 10)}</span>
                  <span
                    onClick={() =>
                      patchTable({ players: { player: player.id } }, match.params.tableId)
                    }
                  >
                    <button className="btn-primary">Add to table</button>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ results: state.searchPlayer });
export default connect(mapStateToProps, { searchPlayer, patchTable })(
  RightPanelAddPlayer
);
