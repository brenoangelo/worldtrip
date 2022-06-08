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
          url: '/assets/images/europa.jpg',
          slug: 'europa',
        },
        {
          name: 'Africa',
          description: 'O continente mais antigo.',
          url: '/assets/images/africa.jpg',
          slug: 'africa',
        },
        {
          name: 'America',
          description: 'O continente mais antigo.',
          url: '/assets/images/america.jpg',
          slug: 'america',
        },
        {
          name: 'America do Sul',
          description: 'O continente mais antigo.',
          url: '/assets/images/america_sul.jpg',
          slug: 'america-do-sul',
        },
        {
          name: 'Oceania',
          description: 'O continente mais antigo.',
          url: '/assets/images/oceania.jpg',
          slug: 'oceania',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/continents', () => {
      return this.schema.all('continent');
    });

    this.get('/continents/:slug', (schema, request) => {
      let slug = request.params.slug;
      let post = schema.db.continents.where({ slug: slug });

      return post;
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
