import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';

import { theme } from '../styles/theme';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    continent: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          name: 'Europa',
          description: 'O continente mais antigo.',
          url: 'assets/images/europa',
          slug: 'europa',
        },
        {
          name: 'Africa',
          description: 'O continente mais antigo.',
          url: 'assets/images/africa',
          slug: 'africa',
        },
        {
          name: 'America',
          description: 'O continente mais antigo.',
          url: 'assets/images/america',
          slug: 'america',
        },
        {
          name: 'America do Sul',
          description: 'O continente mais antigo.',
          url: 'assets/images/america_sul',
          slug: 'america-do-sul',
        },
        {
          name: 'Oceania',
          description: 'O continente mais antigo.',
          url: 'assets/images/oceania',
          slug: 'oceania',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/continents', () => {
      return this.schema.all('')
    });

    this.get(`/continent/:slug`, (schema, request) => {
      let id = request.params.id

      return schema.continents.find(id)
    });
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
