import { Container, Flex } from '@chakra-ui/react';
import { CarouselBanner } from '../components/CarouselBanner';
import { Carousel } from '../components/CarouselBanner/Carousel';
import { Categories } from '../components/Categories';

import { MainBanner } from '../components/MainBanner';

export default function Home() {
  return (
    <Flex direction="column">
      <MainBanner />
      <Categories />
      <CarouselBanner />
    </Flex>
  );
}
