import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        scrollBehavior: "smooth",
      },
    },
  },

  fonts: {
    body: `'Poppins', sans-serif`,
    Heading: `'Poppins', sans-serif`,
  },
  config: {
    cssVarPrefix: "nonD",
  },
});
