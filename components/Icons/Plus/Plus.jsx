import { Box } from "@chakra-ui/react";
import * as React from "react";

const Plus = ({ color = "#000", width = 12, height = 12, ...rest }) => (
  <Box backgroundColor="#b2b2b2" padding={1.5}>
    <svg
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" />
      <path fill="none" d="M0 0h16v16H0z" />
    </svg>
  </Box>
);

export default Plus;
