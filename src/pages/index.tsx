import { Box, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      bgImg="/assets/images/background.svg"
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPosition="center"
      minH={335}
    >
      <Container maxW={1160} h="100%" maxH={335}>
        <Flex justify="space-between" align="center">
          <Stack color="gray.100">
            <Heading>
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>

            <Text>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Image
            src="/assets/icons/airplane.svg"
          />
        </Flex>
      </Container>
    </Flex>
  );
}
