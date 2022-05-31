import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      '100': "#F5F8FA",
      '400': "#999999",
      '700': "#47585B"
    },
    orange: {
      '300': "#FFBA08"
    }
  },

  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700'
      }
    }
  },

  fonts: {
    heading: `Poppins sans-serif`,
    body: `Poppins sans-serif`
  }
})