import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" justify="center" align="center" h={100}>
      <Image src="/assets/icons/logo.svg" alt="" h={45.9} />
    </Flex>
  );
}
