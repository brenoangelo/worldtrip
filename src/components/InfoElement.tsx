import { Stack, Text, Image, Tooltip, Img } from '@chakra-ui/react';

type InfoElement = {
  number?: number;
  src?: string;
  info: string;
  tooltip?: string;
};

export function InfoElement({ number, src, info, tooltip }: InfoElement) {
  return (
    <Stack spacing={number ? '-3' : '6'} align="center" minW={185}>
      {number ? (
        <Text fontSize="5xl" fontWeight={600} color="orange.300">
          {number}
        </Text>
      ) : (
        <Image src={src} maxW={85} />
      )}
      <Text
        fontSize="2xl"
        fontWeight={600}
        overflowWrap="anywhere"
        display="flex"
        gap="5px"
      >
        {info}
        {!!tooltip && (
          <Tooltip hasArrow label={tooltip}>
            <Img src="/assets/icons/info.svg" />
          </Tooltip>
        )}
      </Text>
    </Stack>
  );
}
