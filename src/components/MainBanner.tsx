import { Container, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';

export function MainBanner() {
  return (
    <Flex
      bgImg="/assets/images/background.svg"
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPosition="center"
      minH={335}
      mb={8}
    >
      <Container maxW={1160} h="100%">
        <Flex
          justify="space-between"
          align="center"
          position="relative"
          h={335}
        >
          <Stack color="gray.100">
            <Heading
              as="h1"
              fontWeight="500"
              size="xl"
              lineHeight="54px"
              mb="20px"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>

            <Text fontSize="xl" maxW="524px" fontWeight="400">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Image
            src="/assets/icons/airplane.svg"
            position="absolute"
            right={0}
            bottom={-8}
          />
        </Flex>
      </Container>
    </Flex>
  );
}
