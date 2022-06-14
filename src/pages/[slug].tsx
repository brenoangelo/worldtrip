import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';

import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { CitiesContainer } from '../components/CitiesContainer';
import { InfoElement } from '../components/InfoElement';

type ContinentPage = {
  slug: string;
};

export default function ContinentPage({ slug }: ContinentPage) {
  useEffect(() => {
    api
      .get(`continents/${slug}`)
      .then((response) => console.log(response.data));
  }, []);

  return (
    <Flex direction="column" pb="9">
      <Flex
        mb="20"
        bgImage="/assets/images/europa.jpg"
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
            Europa
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
            <InfoElement number={50} info="países" />
            <InfoElement number={60} info="línguas" />
            <InfoElement number={27} info="cidades +100" />
          </Flex>
        </Flex>

        <Stack>
          <Heading fontWeight={500} fontSize="4xl">
            Cidades +100
          </Heading>
          <CitiesContainer />
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
