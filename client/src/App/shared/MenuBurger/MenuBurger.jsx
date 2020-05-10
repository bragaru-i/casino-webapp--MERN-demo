import React from 'react';
import './MenuBurger.css';
import { Link } from 'react-router-dom';

export const MenuBurger = (props) => {
  let link = props.link;
  let display = link === 'table' ? 'menu-burger change' : 'menu-burger';
  return (
    <div className="menu-container">
      <Link to={`/${link}`}>
        <div className={display}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <span style={{ paddingLeft: '0.75rem' }}>Pick a Table</span>
      </Link>
    </div>
  );
};

export default MenuBurger;
