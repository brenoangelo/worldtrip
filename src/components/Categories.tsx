import { Container, Flex, HStack } from '@chakra-ui/react';
import { InfoElement } from './InfoElement';

const CATEGORIES_LIST = [
  { title: 'vida noturna', src: '/assets/icons/cocktail.svg' },
  { title: 'praia', src: '/assets/icons/surf.svg' },
  { title: 'moderno', src: '/assets/icons/building.svg' },
  { title: 'clássico', src: '/assets/icons/museum.svg' },
  { title: 'e mais...', src: '/assets/icons/earth.svg' },
];

export function Categories() {
  return (
    <Flex pt="20" pb="20">
      <Container maxW={1160}>
        <HStack justify="space-between">
          {CATEGORIES_LIST.map((category) => (
            <InfoElement src={category.src} info={category.title} />
          ))}
        </HStack>
      </Container>
    </Flex>
  );
}
