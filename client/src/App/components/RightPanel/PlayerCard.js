import React from 'react';
import moment from 'moment';

import './PlayerCard.css';

const PlayerCard = ({ player, patchTable, playerId, tableId }) => {
  let { avatar, visits, firstName, lastName, cId, country, cardType, birthday } = player
    ? player
    : '';
  // let age = birthday ? new Date().getFullYear() - new Date(birthday).getFullYear() : 0;
  let age = birthday ? moment().diff(birthday, 'years') : 0;

  return (
    <div className="player-details-container">
      <div className="avatar-container">
        <img src={avatar} alt="Player Avatar"></img>
        <button className="btn-primary details ">
          {' '}
          <span style={{ fontSize: '0.75rem' }}> Get Details </span>
        </button>
        <button className="btn-primary warning">
          <span
            style={{ fontSize: '0.75rem' }}
            onClick={() => patchTable({ inactive: { player: playerId } }, tableId)}
          >
            Check out
          </span>
        </button>
        <span style={{ fontWeight: '400' }} className="name">
          {firstName} {lastName}
        </span>
      </div>
      <div className="player-info-container">
        <div>
          <span>Casino ID: {cId}</span>

          <span> Country: {country}</span>
          <span> Card Type: {cardType}</span>
          <span> Age: {age} years</span>
          <span>
            Last Visit:{' '}
            {visits && visits.length > 0
              ? moment(visits[0]).format('LL')
              : moment().format('LL')}
          </span>
          <span>Total visits: {visits && visits.length > 0 ? visits.length : 1}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
