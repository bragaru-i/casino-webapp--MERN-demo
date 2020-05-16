import React from 'react';
import { connect } from 'react-redux';
import patchTable from '../../../actions/patchTable';
import { Link } from 'react-router-dom';
import './RightPanelPlayer.css';
import Footer from './RightPlayerFooter';

import Chip from './Chip';
import PlayerCard from './PlayerCard';

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

  return (
    <div className="right-panel-container">
      <div className="right-main-container">
        <Chip type="chipIn" chips={transaction.chipIn} transactionId={transaction.id} />
        <Chip type="chipOut" chips={transaction.chipOut} transactionId={transaction.id} />
        <PlayerCard
          player={player.player}
          patchTable={patchTable}
          playerId={match.params.playerId}
          tableId={match.params.tableId}
        />
      </div>
      <div className="footer">
        <Footer transaction={transaction} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ table: state.table });
export default connect(mapStateToProps, { patchTable })(RightPanelPlayer);
