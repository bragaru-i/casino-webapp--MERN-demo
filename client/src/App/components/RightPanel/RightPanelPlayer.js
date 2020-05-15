import React from 'react';
import { connect } from 'react-redux';
import patchTable from '../../../actions/patchTable';
import { Link } from 'react-router-dom';
import './RightPanelPlayer.css';
import Footer from './RightPlayerFooter';

import Chip from './Chip';

const RightPanelPlayer = ({ match, table, patchTable }) => {
  let player =
    table.loading === 'loaded'
      ? table.data.table.players.find((item) => item.player.id === match.params.playerId)
      : {};

  if (!player)
    return (
      <div
        className="right-panel-container"
        style={{ color: 'red', justifyContent: 'center', alignItems: 'center' }}
      >
        No player selected. Please select a player to perform further actions
      </div>
    );
  let transactions = player.player ? player.player.transactions.transaction : [];
  let transaction = transactions[transactions.length - 1] || {};
  let { avatar, firstName, lastName, cId, country, cardType, birthday } = player.player
    ? player.player
    : '';

  let age = birthday ? new Date().getFullYear() - new Date(birthday).getFullYear() : 0;
  return (
    <div className="right-panel-container">
      <div className="right-main-container">
        <Chip type="chipIn" chips={transaction.chipIn} transactionId={transaction.id} />
        <Chip type="chipOut" chips={transaction.chipOut} transactionId={transaction.id} />
        <div className="player-details-container">
          <div className="image-container">
            <img src={avatar}></img>
          </div>
          <div className="player-details-info">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    {firstName} {lastName}
                  </td>
                </tr>
                <tr>
                  <td>CasinoId</td>
                  <td>{cId}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{country}</td>
                </tr>
                <tr>
                  <td>Card Type</td>
                  <td>{cardType}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{age}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="player-details-actions">
            <Link to={`tables/${match.params.tableId}`}>
              <button
                onClick={() =>
                  patchTable(
                    { inactive: { player: match.params.playerId } },
                    match.params.tableId
                  )
                }
                className="btn-primary warning"
              >
                <span> Check/Out</span>
              </button>
            </Link>
            <button style={{ marginLeft: '3px' }} className="btn-primary details">
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer transaction={transaction} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ table: state.table });
export default connect(mapStateToProps, { patchTable })(RightPanelPlayer);
