import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#F5F8FA',
      '400': '#999999',
      '700': '#47585B',
    },
    orange: {
      '300': '#FFBA08',
    },
  },

  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      },
      '.mySwiper': {
        '.swiper-button-prev': {
          color: 'orange.300',
          width: '60px',
          _after: {
            fontSize: '30px',
          },
        },
        '.swiper-button-next': {
          color: 'orange.300',
          width: '60px',
          _after: {
            fontSize: '30px',
          },
        },
        '.swiper-pagination-bullet': {
          backgroundColor: 'gray.400',
          width: '16px',
          height: '16px',
          margin: '0 6px!important',
        },
        '.swiper-pagination-bullet-active': {
          backgroundColor: 'orange.300',
        },
      },
    },
  },

  fonts: {
    heading: `Poppins`,
    body: `Poppins`,
  },
});
