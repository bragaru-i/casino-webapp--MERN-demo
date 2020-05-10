import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 30 30'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M6,7h18V6c0-1.105-0.895-2-2-2H3C1.895,4,1,4.895,1,6v14c0,1.105,0.895,2,2,2h1V9C4,7.895,4.895,7,6,7z"
    />
    <path
      fill={fill}
      d="M27,9H8c-1.105,0-2,0.895-2,2v13c0,1.105,0.895,2,2,2h19c1.105,0,2-0.895,2-2V11C29,9.895,28.105,9,27,9z M12,23  c0.605-2.373,3.713-1.717,4.125-3.056v-0.993c-0.206-0.111-0.796-0.871-0.858-1.466c-0.162-0.013-0.417-0.175-0.492-0.812  c-0.04-0.342,0.12-0.534,0.217-0.595c0,0-0.242-0.551-0.242-1.099c0-1.628,0.806-2.979,2.75-2.979c1.049,0,1.375,0.745,1.375,0.745  c0.938,0,1.375,1.029,1.375,2.234c0,0.601-0.242,1.099-0.242,1.099c0.097,0.061,0.258,0.253,0.217,0.595  c-0.075,0.637-0.33,0.799-0.492,0.812c-0.062,0.594-0.652,1.355-0.858,1.466v0.993C19.287,21.283,22.395,20.627,23,23H12z"
    />
  </svg>
);

export default SVG;
