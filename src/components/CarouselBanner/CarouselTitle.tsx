import { Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CarouselTitleProps = {
  title: ReactNode;
};

export function CarouselTitle({ title }: CarouselTitleProps) {
  return (
    <Heading
      as="h2"
      fontWeight={500}
      textAlign="center"
      lineHeight="54px"
      mb="54px"
      _before={{
        content: '""',
        display: 'block',
        height: '2px',
        width: '90px',
        backgroundColor: 'gray.700',
        margin: '0 auto 54px auto',
      }}
    >
      {title}
    </Heading>
  );
}
