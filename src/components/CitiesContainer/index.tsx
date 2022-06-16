import { HStack } from '@chakra-ui/react';
import { CardImage } from './CardImage';

type CitiesContainerProps = {
  cities:
    | {
        city: string;
        cityImg: string;
        country: string;
        countryImg: string;
      }[]
    | null
    | undefined;
};

export function CitiesContainer({ cities }: CitiesContainerProps) {
  return (
    <HStack spacing={45}>
      {cities?.map((city, key) => (
        <CardImage
          key={key}
          title={city.city}
          description={city.country}
          imageSrc={city.cityImg}
          logoSrc={city.countryImg}
        />
      ))}
    </HStack>
  );
}
