import { extendTheme } from "@chakra-ui/react";

const brandColor = "#1DB954";
const brandColorDark = "#1ED760";
const grayColor = "#121212";
const grayColorDark = "#282828";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "brand.900",
        display: "grid",
        placeContent: "center",
        height: "100vh",
        width: "100vw",
      },
    },
  },
  colors: {
    brand: {
      900: grayColor,
      800: grayColorDark,
      500: brandColorDark,
      400: brandColor,
    },
  },
});
