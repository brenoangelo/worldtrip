import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

type Continent = {
  name: string;
  description: string;
  url: string;
  slug: string;
};

export function Carousel() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get('continents').then(({ data }) => setContinents(data.continents));
  }, []);

  return (
    <Flex>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {continents.map((continent) => (
          <SwiperSlide>
            <Link position="relative" href={continent.slug}>
              <Flex
                w="100%"
                h="100%"
                background="blackAlpha.600"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                direction="column"
                justify="center"
              >
                <Heading as="h3" color="gray.100" fontSize="5xl">
                  {continent.name}
                </Heading>
                <Text as="h4" color="gray.100" fontSize="2xl" fontWeight={700}>
                  {continent.description}
                </Text>
              </Flex>
              <Image
                src={continent.url}
                maxH={450}
                w="100%"
                align="center"
                objectFit="cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
