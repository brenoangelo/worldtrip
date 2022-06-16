import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';

import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { CitiesContainer } from '../components/CitiesContainer';
import { InfoElement } from '../components/InfoElement';

type ContinentPage = {
  slug: string;
};

type Continent = {
  description: string;
  id: string;
  name: string;
  slug: string;
  url: string;
  info: {
    countriesCount: number;
    languagesCount: number;
    topCitiesVisitedCount: number;
    topCities:
      | {
          city: string;
          cityImg: string;
          country: string;
          countryImg: string;
        }[]
      | null
      | undefined;
  };
};

export default function ContinentPage({ slug }: ContinentPage) {
  const [continent, setContinent] = useState<Continent>();

  useEffect(() => {
    api
      .get(`continents/${slug}`)
      .then((response) => setContinent(response.data[0]));
  }, []);

  return (
    <Flex direction="column" pb="9">
      <Flex
        mb="20"
        bgImage={continent?.url}
        minH={500}
        bgPosition="center"
      >
        <Container maxW={1160} display="flex" alignItems="flex-end">
          <Heading
            as="h1"
            color="gray.100"
            fontSize="5xl"
            fontWeight={600}
            pb="59px"
          >
            {continent?.name}
          </Heading>
        </Container>
      </Flex>

      <Container maxW={1160}>
        <Flex gap={70} mb="20" align="center">
          <Text fontSize="2xl">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex>
            <InfoElement
              number={continent?.info.countriesCount}
              info="países"
            />
            <InfoElement
              number={continent?.info.languagesCount}
              info="línguas"
            />
            <InfoElement
              number={continent?.info.topCitiesVisitedCount}
              info="cidades +100"
              tooltip="São as cidades que o continente possui que estão entre as 100 cidades mais visitadas do mundo"
            />
          </Flex>
        </Flex>

        <Stack>
          <Heading fontWeight={500} fontSize="4xl">
            Cidades +100
          </Heading>
          <CitiesContainer cities={continent?.info.topCities} />
        </Stack>
      </Container>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug }: any = params;

  return {
    props: {
      slug,
    },
  };
};
