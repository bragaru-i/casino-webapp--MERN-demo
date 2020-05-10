import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 95.334 95.334'
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
      d="M47.667,0C21.341,0,0,21.341,0,47.667s21.341,47.667,47.667,47.667s47.667-21.341,47.667-47.667S73.993,0,47.667,0z
		 M80.438,56.641H14.896c-0.862,0-1.561-0.699-1.561-1.562V40.254c0-0.862,0.699-1.561,1.561-1.561h65.542
		c0.862,0,1.562,0.699,1.562,1.561v14.825C81.999,55.941,81.3,56.641,80.438,56.641z"
    />
  </svg>
);

export default SVG;
