import { HStack } from '@chakra-ui/react';
import { CardImage } from './CardImage';

const COUNTRIES = [
  {
    title: 'Londres',
    description: 'Reino Unido',
    imageSrc: '/assets/images/europa.jpg',
    logoSrc: '/assets/logos/britania.png',
  },
  {
    title: 'Londres',
    description: 'Reino Unido',
    imageSrc: '/assets/images/europa.jpg',
    logoSrc: '/assets/logos/britania.png',
  },
  {
    title: 'Londres',
    description: 'Reino Unido',
    imageSrc: '/assets/images/europa.jpg',
    logoSrc: '/assets/logos/britania.png',
  },
  {
    title: 'Londres',
    description: 'Reino Unido',
    imageSrc: '/assets/images/europa.jpg',
    logoSrc: '/assets/logos/britania.png',
  },
];

export function CitiesContainer() {
  return (
    <HStack>
      {COUNTRIES.map((country, key) => (
        <CardImage
          key={key}
          title={country.title}
          description={country.description}
          imageSrc={country.imageSrc}
          logoSrc={country.logoSrc}
        />
      ))}
    </HStack>
  );
}
