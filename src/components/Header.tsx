import { Flex, Image, Link } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" justify="center" align="center" h={100}>
      <Link href="/">
        <Image src="/assets/icons/logo.svg" alt="" w="46" />
      </Link>
    </Flex>
  );
}
