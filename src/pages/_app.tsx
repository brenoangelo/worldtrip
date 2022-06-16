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
          info: {
            countriesCount: 50,
            languagesCount: 60,
            topCitiesVisitedCount: 27,
            topCities: [
              {
                country: 'Reino Unido',
                city: 'Londres',
                cityImg: '/assets/images/cities/londres.jpg',
                countryImg: '/assets/logos/britania.png',
              },
              {
                country: 'França',
                city: 'Paris',
                cityImg: '/assets/images/cities/paris.jpg',
                countryImg: '/assets/logos/franca.png',
              },
              {
                country: 'Itália',
                city: 'Roma',
                cityImg: '/assets/images/cities/roma.jpeg',
                countryImg: '/assets/logos/italia.png',
              },
              {
                country: 'Holanda',
                city: 'Amsterdã',
                cityImg: '/assets/images/cities/amsterda.jpg',
                countryImg: '/assets/logos/holanda.png',
              },
            ],
          },
        },
        {
          name: 'Africa',
          description: 'O continente mais antigo.',
          url: '/assets/images/africa.jpg',
          slug: 'africa',
          info: {
            countriesCount: 54,
            languagesCount: 2000,
            topCitiesVisitedCount: 40,
            topCities: [
              {
                country: 'Marrocos',
                city: 'Marrakech',
                cityImg: '/assets/images/cities/marrakech.jpg',
                countryImg: '/assets/logos/marrocos.jpg',
              },
              {
                country: 'Africa do sul',
                city: 'Johannesburg',
                cityImg: '/assets/images/cities/johannesburg.jpg',
                countryImg: '/assets/logos/africa-do-sul.png',
              },
            ],
          },
        },
        {
          name: 'Asia',
          description: 'O continente mais antigo.',
          url: '/assets/images/asia.jpg',
          slug: 'asia',
          info: {
            countriesCount: 50,
            languagesCount: 2000,
            topCitiesVisitedCount: 40,
            topCities: [
              {
                country: 'China',
                city: 'Hong Kong',
                cityImg: '/assets/images/cities/hong-kong.jpg',
                countryImg: '/assets/logos/china.png',
              },
              {
                country: 'Coreia do sul',
                city: 'Seoul',
                cityImg: '/assets/images/cities/seoul.jpg',
                countryImg: '/assets/logos/coreia-do-sul.png',
              },
              {
                country: 'Vietnã',
                city: 'Ho Chi Minh',
                cityImg: '/assets/images/cities/ho-chi.jpg',
                countryImg: '/assets/logos/vietnan.png',
              },
              {
                country: 'Japão',
                city: 'Osaka',
                cityImg: '/assets/images/cities/osaka.jpg',
                countryImg: '/assets/logos/japao.png',
              },
              {
                country: 'India',
                city: 'Delhi',
                cityImg: '/assets/images/cities/delhi.jpg',
                countryImg: '/assets/logos/india.png',
              },
            ],
          },
        },
        {
          name: 'America',
          description: 'O continente mais antigo.',
          url: '/assets/images/america.jpg',
          slug: 'america',
          info: {
            countriesCount: 37,
            languagesCount: 1061,
            topCitiesVisitedCount: 40,
            topCities: [
              {
                country: 'Estados Unidos',
                city: 'Orlando',
                cityImg: '/assets/images/cities/orlando.jpg',
                countryImg: '/assets/logos/estados-unidos.png',
              },
              {
                country: 'Canada',
                city: 'Toronto',
                cityImg: '/assets/images/cities/toronto.jpg',
                countryImg: '/assets/logos/canada.png',
              },
              {
                country: 'Canada',
                city: 'Vancouver',
                cityImg: '/assets/images/cities/vancouver.jpg',
                countryImg: '/assets/logos/canada.png',
              },
              {
                country: 'Estados Unidos',
                city: 'San Francisco',
                cityImg: '/assets/images/cities/san-francisco.jpg',
                countryImg: '/assets/logos/estados-unidos.png',
              },
              {
                country: 'Estados Unidos',
                city: 'Honolulu',
                cityImg: '/assets/images/cities/holulu.jpg',
                countryImg: '/assets/logos/estados-unidos.png',
              },
            ],
          },
        },
        {
          name: 'America do Sul',
          description: 'O continente mais antigo.',
          url: '/assets/images/america_sul.jpg',
          slug: 'america-do-sul',
          info: {
            countriesCount: 50,
            languagesCount: 2000,
            topCitiesVisitedCount: 40,
            topCities: [
              {
                country: 'Brasil',
                city: 'Rio de Janeiro',
                cityImg: '/assets/images/cities/rio-de-janeiro.jpg',
                countryImg: '/assets/logos/brasil.png',
              },
              {
                country: 'Argentina',
                city: 'Buenos Aires',
                cityImg: '/assets/images/cities/buenos-aires.jpg',
                countryImg: '/assets/logos/argentina.png',
              },
              {
                country: 'Peru',
                city: 'Cusco',
                cityImg: '/assets/images/cities/cusco.jpg',
                countryImg: '/assets/logos/peru.png',
              },
              {
                country: 'Brasil',
                city: 'São Paulo',
                cityImg: '/assets/images/cities/sao-paulo.jpg',
                countryImg: '/assets/logos/brasil.png',
              },
              {
                country: 'Chile',
                city: 'Santiago',
                cityImg: '/assets/images/cities/santiago.jpg',
                countryImg: '/assets/logos/chile.png',
              },
            ],
          },
        },
        {
          name: 'Oceania',
          description: 'O continente mais antigo.',
          url: '/assets/images/oceania.jpg',
          slug: 'oceania',
          info: {
            countriesCount: 50,
            languagesCount: 2000,
            topCitiesVisitedCount: 40,
            topCities: [
              {
                country: 'Austrália',
                city: 'Sidney',
                cityImg: '/assets/images/cities/sidney.jpg',
                countryImg: '/assets/logos/australia.png',
              },
              {
                country: 'Nova Zelândia',
                city: 'Milford Sound',
                cityImg: '/assets/images/cities/milford.jpg',
                countryImg: '/assets/logos/nova-zelandia.png',
              },
              {
                country: 'Chile',
                city: 'Ilha de Páscoa',
                cityImg: '/assets/images/cities/ilha-pascoa.jpg',
                countryImg: '/assets/logos/chile.png',
              },
              {
                country: 'Estados Unidos',
                city: 'Havaí',
                cityImg: '/assets/images/cities/havai.jpg',
                countryImg: '/assets/logos/estados-unidos.jpg',
              },
            ],
          },
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
      let continent = schema.db.continents.where({ slug: slug });

      return continent;
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
