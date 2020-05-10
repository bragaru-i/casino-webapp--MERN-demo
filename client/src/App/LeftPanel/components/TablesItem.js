import React, { useState } from "react";
import Icons from "../../shared/Icons/";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const TablesItem = ({ name, id }) => {
  const [color, setcolor] = useState("#888f95");
  const changeBackground = newColor => setcolor(newColor);
  let type = name[0].toLowerCase() === "a" ? "roulette" : "cards";

  return (
    <NavLink to={`/table/${id}`}>
      <li
        className="tables-item"
        onMouseOver={() => changeBackground("#23B3D4")}
        onMouseLeave={() => changeBackground("#888f95")}
      >
        <Icons name={type} width="36px" fill={color} />
        <span> {name}</span>
      </li>
    </NavLink>
  );
};

TablesItem.propType = {
  name: PropTypes.object.isRequired,
  id: PropTypes.object.isRequired
};
export default TablesItem;

//   <Icon
// name="chip-stack"
// width="18px"
// fill="#788799"
// style={{ background: 'transparent', paddingLeft: '1rem' }}
// />
