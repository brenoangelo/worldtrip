import { Stack, Text, Image } from '@chakra-ui/react';

type InfoElement = {
  number?: number;
  src?: string;
  info: string;
};

export function InfoElement({ number, src, info }: InfoElement) {
  return (
    <Stack spacing={number ? '-3' : '6'} align="center" minW={165}>
      {number ? (
        <Text fontSize="5xl" fontWeight={600} color="orange.300">
          {number}
        </Text>
      ) : (
        <Image src={src} maxW={85} />
      )}
      <Text fontSize="2xl" fontWeight={600} overflowWrap="anywhere">
        {info}
      </Text>
    </Stack>
  );
}
