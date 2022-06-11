import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { CitiesContainer } from '../components/CitiesContainer';
import { InfoElement } from '../components/InfoElement';
import { api } from '../services/api';

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
    <Flex direction="column">
      <Flex position="relative" mb="20">
        <Heading
          as="h1"
          position="absolute"
          bottom={59}
          left={140}
          color="gray.100"
          fontSize="5xl"
          fontWeight={600}
        >
          Europa
        </Heading>
        <Image
          src="/assets/images/europa.jpg"
          w="100%"
          align="center"
          objectFit="cover"
          maxH={500}
        />
      </Flex>

      <Container maxW={1160}>
        <Flex gap={70}>
          <Text fontSize="2xl">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex>
            <InfoElement number={50} info="países"/>
            <InfoElement number={60} info="línguas"/>
            <InfoElement number={27} info="cidades+100"/>
          </Flex>
        </Flex>

        <CitiesContainer />
      </Container>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
};
