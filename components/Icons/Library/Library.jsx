import * as React from "react";

const Library = ({ color = "#fff", width = 24, height = 24, ...rest }) => (
  <svg height={height} width={width} fill={color} {...rest}>
    <path d="m13.66 4.097-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z" />
  </svg>
);

export default Library;
