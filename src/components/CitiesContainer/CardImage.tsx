import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

type CardImage = {
  imageSrc: string;
  title: string;
  description: string;
  logoSrc: string;
}

export function CardImage({ imageSrc, title, description, logoSrc }: CardImage) {
  return (
    <Box>
      <Image src={imageSrc}/>
      <Flex>
        <Stack>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
        <Image src={logoSrc} rounded="full" w={30} h={30}/>
      </Flex>
    </Box>
  )
}