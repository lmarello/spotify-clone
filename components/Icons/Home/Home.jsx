import * as React from "react";

const Home = ({ color = "#fff", width = 24, height = 24, ...rest }) => (
  <svg height={height} width={width} fill={color} {...rest}>
    <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z" />
  </svg>
);

export default Home;
