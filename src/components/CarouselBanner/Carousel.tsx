import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Carousel() {

  useEffect(() => {
    api.get('continents')
    .then(response => console.log(response.data))
  }, [])

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
        <SwiperSlide>
          <Link position="relative">
            <Stack
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
            >
              <Heading as="h3" color="gray.100" fontSize="5xl">Europa</Heading>
              <Text as="h4" color="gray.100" fontSize="2xl" fontWeight={700}>O continente mais antigo.</Text>
            </Stack>
            <Image src="/assets/images/continent_image.svg" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
