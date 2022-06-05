import { Stack, Text, Image } from '@chakra-ui/react';

type InfoElement = {
  number?: number;
  src?: string;
  info: string;
};

export function InfoElement({ number, src, info }: InfoElement) {
  return (
    <Stack spacing="6" align="center" minW={158}>
      {number ? <Text>{number}</Text> : <Image src={src} maxW={85} />}
      <Text fontSize="2xl" fontWeight={600}>{info}</Text>
    </Stack>
  );
}
