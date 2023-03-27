import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const outofstock = () => {
  return (
    <Box display='flex' flexDir='column' alignItems='center' my='20'mx='auto' maxW='sm'>
      <Image
        alt='out of stock'
        width={200}
        height={200}
        src='/out_of_stock.svg'
      />
      <Text mx='4' mb='20' textAlign='center'>The product you seek is OUT OF STOCK. Please try other products.</Text>
    </Box>
  );
};

export default outofstock;
