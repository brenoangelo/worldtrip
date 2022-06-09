import { Flex, Heading, Image } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
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
      <Flex position="relative">
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
