import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import patchTransaction from '../../../actions/patchTransaction';
import './RightPanelFooter.css';
import countFloat from '../../../utils/countFloat';
import moment from 'moment';

const RightPlayerFooter = ({ transaction, patchTransaction }) => {
  let tableId = useRouteMatch().params.tableId;
  const [result, setResult] = useState('');
  const [entered, setEntered] = useState('');
  const [currency, setCurrency] = useState('USD');
  useEffect(() => {
    switch (currency) {
      case 'EUR':
        return setResult(parseFloat(entered * 1.08).toFixed(2));
      case 'GEL':
        return setResult(parseFloat(entered * 0.31).toFixed(2));
      case 'TL':
        return setResult(parseFloat(entered * 0.14).toFixed(2));
      default:
        return setResult(entered);
    }
  }, [entered, currency]);

  return (
    <Fragment>
      <div className="player-quickdrop">
        <div className="qdrop-name">
          <span>Quick CashDrop</span>
          <span style={{ cursor: 'pointer' }}>
            <span
              className={currency === 'USD' ? 'active' : ''}
              onClick={() => setCurrency('USD')}
            >
              usd
            </span>
            <span
              className={currency === 'EUR' ? 'active' : ''}
              onClick={() => setCurrency('EUR')}
            >
              {' '}
              eur
            </span>
            <span
              className={currency === 'TL' ? 'active' : ''}
              onClick={() => setCurrency('TL')}
            >
              {' '}
              tl
            </span>
            <span
              className={currency === 'GEL' ? 'active' : ''}
              onClick={() => setCurrency('GEL')}
            >
              {' '}
              gel
            </span>
          </span>
        </div>
        <div className="qdrop-digits-container">
          <div className="qdrop-digits">
            <div className="qdrop-row">
              <div onClick={() => setEntered(entered + '1')}>1</div>
              <div onClick={() => setEntered(entered + '2')}>2</div>
              <div onClick={() => setEntered(entered + '3')}>3</div>
              <div onClick={() => setEntered(entered + '4')}>4</div>
              <div
                className="qdrop-btns"
                onClick={() => setEntered(entered.slice(0, -1))}
              >
                C
              </div>
            </div>
            <div className="qdrop-row drop">
              <div onClick={() => setEntered(entered + '5')}>5</div>
              <div onClick={() => setEntered(entered + '6')}>6</div>
              <div onClick={() => setEntered(entered + '7')}>7</div>
              <div onClick={() => setEntered(entered + '8')}>8</div>
              <div className="qdrop-btns " onClick={() => setEntered('')}>
                DELETE
              </div>
            </div>
            <div className="qdrop-row ">
              <div onClick={() => setEntered(entered + '9')}>9</div>
              <div onClick={() => setEntered(entered + '0')}>0</div>
              <div onClick={() => setEntered(entered + '00')}>00</div>
              <div onClick={() => setEntered(entered + '000')}>000</div>
              <div
                className="qdrop-btns"
                onClick={() =>
                  patchTransaction(transaction.id, { cash: { amount: result } }, tableId)
                }
              >
                DROP
              </div>
            </div>
          </div>

          <div className="qdrop-display">
            <div style={{ fontSize: '0.75rem' }}>
              <span>convert from {currency} :</span>
              <br />
              <span style={{ fontWeight: '400', flex: '1' }}>${result}</span>
            </div>
            <div style={{ position: 'relative', marginTop: '1rem' }}>
              <input
                type="number"
                style={{ marginLeft: '5px' }}
                value={entered}
                onChange={(e) => setEntered(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="player-statistics">
        <div className="qdrop-name">
          <span> Results on current table </span>
        </div>
        <div className="player-stats-container">
          <div>
            <span>Chip In: {transaction.chipIn && countFloat(transaction.chipIn)}</span>
            <br />
            <span>
              Chip Out: {transaction.chipOut && countFloat(transaction.chipOut)}{' '}
            </span>
            <br />
            <span>Total DROP : {transaction.cash ? transaction.cash.amount : 0} </span>
            <br />
            <span>Result: {transaction.result || 0}</span>
            <br></br>
          </div>
          <div className="player-cash-logs">
            <span style={{ height: '1rem', fontSize: '0.8rem' }}>CASH LOGS:</span>
            <ul>
              {transaction.cash
                ? transaction.cash.log.map((item) => (
                    <li key={item._id}>
                      <span>[{moment(item.date).format('h:mm')}]</span>
                      <span> : amount ${item.amount}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { patchTransaction })(RightPlayerFooter);
