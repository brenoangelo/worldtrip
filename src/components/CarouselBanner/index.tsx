import { Container, Flex, Heading, Stack } from '@chakra-ui/react';
import { Carousel } from './Carousel';
import { CarouselTitle } from './CarouselTitle';

const TITLE = <>Vamos nessa? <br />Então escolha seu continente</>

export function CarouselBanner() {
  return (
    <Container maxWidth={1240} pb="10">
      <CarouselTitle title={TITLE} />
      <Carousel />
    </Container>
  );
}
