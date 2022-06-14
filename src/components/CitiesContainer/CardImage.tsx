import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

type CardImage = {
  imageSrc: string;
  title: string;
  description: string;
  logoSrc: string;
};

export function CardImage({
  imageSrc,
  title,
  description,
  logoSrc,
}: CardImage) {
  return (
    <Box maxW={256} maxH={279} h="100%">
      <Image src={imageSrc} borderRadius="4px 4px 0 0" maxH={173} />
      <Flex
        border="1px solid"
        borderColor="orange.300"
        borderTop="none"
        p="18px 25px 25px 25px"
        justify="space-between"
        align="center"
        borderRadius="0 0 4px 4px"
      >
        <Stack>
          <Heading fontSize="xl" fontWeight={600}>
            {title}
          </Heading>
          <Text fontSize="2sm" color="gray.400">
            {description}
          </Text>
        </Stack>
        <Image src={logoSrc} rounded="full" w={30} h={30} />
      </Flex>
    </Box>
  );
}
