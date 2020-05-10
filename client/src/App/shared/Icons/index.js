import React from 'react';
import './index.css';
import Cards from './icons/cards.jsx';
import Roulette from './icons/roulette.jsx';
import MoneyBag from './icons/money-bag';
import Contact from './icons/contact';
import ChipStack from './icons/chip-stack';
import Plus from './icons/plus';
import Minus from './icons/minus';
import ChipOut from './icons/chip-out';
import ChipIn from './icons/chip-in';
const Icon = props => {
  switch (props.name) {
    case 'cards':
      return <Cards {...props} />;
    case 'roulette':
      return <Roulette {...props} />;
    case 'money-bag':
      return <MoneyBag {...props} />;
    case 'contact':
      return <Contact {...props} />;
    case 'chip-stack':
      return <ChipStack {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'minus':
      return <Minus {...props} />;
    case 'chip-out':
      return <ChipOut {...props} />;
    case 'chip-in':
      return <ChipIn {...props} />;
    default:
      return;
  }
};
export default Icon;
