import React, { Fragment, useEffect } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import MenuBurger from '../../shared/MenuBurger/MenuBurger';
import { connect } from 'react-redux';

import Icon from '../../shared/Icons';
import loadTable from '../../../actions/getTableByIdAction';

const LeftPanelTableId = ({ table, loadTable }) => {
  const match = useRouteMatch();
  let tableId = match.params.tableId;

  useEffect(() => {
    loadTable(tableId);
  }, [tableId]);

  let data = table.data.table || [];

  return (
    <Fragment>
      <MenuBurger link="table" />
      <div className="left-list-container">
        <ul className="list-container">
          <li className="list-player-item" style={{ fontStyle: 'italic' }}>
            <Link to={`${match.url}/addPlayer`}>
              <Icon
                name="contact"
                fill="white"
                width="45px"
                style={{
                  background: 'transparent',
                  paddingLeft: '1rem',
                  // paddingRight: '5px',
                }}
              ></Icon>
              <span style={{ paddingLeft: '5px' }}> Add a player</span>
            </Link>
          </li>
          {table.loading === 'loaded' &&
            data.players.map((item) => (
              <li key={item.player.id} className="list-player-item">
                <NavLink to={`${match.url}/player/${item.player.id}`}>
                  <div>
                    <span>
                      {item.player.firstName} {item.player.lastName}
                    </span>
                    <span>ID:{item.player.cId}</span>
                  </div>
                  <div>
                    <img
                      style={{ width: '3rem' }}
                      src={item.player.avatar}
                      alt="Avatar"
                    ></img>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ table: state.table });
export default connect(mapStateToProps, { loadTable })(LeftPanelTableId);
