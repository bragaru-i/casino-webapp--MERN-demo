import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import searchPlayer from '../../../actions/searchPlayerAction';
import patchTable from '../../../actions/patchTable';
import './RightPanelAddPlayer.css';
import { Link } from 'react-router-dom';

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
          Enter first name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label>
          Enter last name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label>
          Enter casino id
          <input type="text" name="cId" value={cId} onChange={(e) => onChange(e)} />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
      {/* Rendering results
       */}
      <div className="search-result-container">
        <ul className="search-results">
          <li>
            <span>Name Surname</span>
            <span>CasinoId</span>
            <span>Avatar</span>
            <span>Country</span>
            <span>LastVisit</span>
            <span>Actions</span>
          </li>
          {results.loading === 'loaded' &&
            results.results > 0 &&
            results.data.map((player) => (
              <li key={player.id}>
                <span>
                  {player.firstName} {player.lastName}
                </span>
                <span>{player.cId}</span>
                <span>Image</span>
                <span>{player.country}</span>
                <span>{player.visits[player.visits.length - 1].slice(0, 10)}</span>
                <span
                  onClick={() =>
                    patchTable({ players: { player: player.id } }, match.params.tableId)
                  }
                >
                  Add to table
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ results: state.searchPlayer });
export default connect(mapStateToProps, { searchPlayer, patchTable })(
  RightPanelAddPlayer
);
