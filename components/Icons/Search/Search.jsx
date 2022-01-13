import * as React from "react";

const Search = ({ color = "#fff", width = 24, height = 24, ...rest }) => (
  <svg height={height} width={width} fill={color} {...rest}>
    <path d="M16.387 16.623A8.47 8.47 0 0 0 19 10.5a8.5 8.5 0 1 0-8.5 8.5 8.454 8.454 0 0 0 5.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z" />
  </svg>
);

export default Search;
