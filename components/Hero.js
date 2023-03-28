import { Box, Button, Text } from "@chakra-ui/react";
import SwiperPix from "./SwiperPix";

const Hero = () => {
  return (
    <Box
      minH={{ base: "90vh", sm: '100vh', md: "80vh" }}
      pos='relative'
      bgImage={`url(/bg.webp)`}>
      {/* <Image alt='bg' width={1440} height={600} src='/bg.webp' /> */}
      <Box
        pos='absolute'
        //   bg='#00f700'
        bg='gray.700'
        opacity='0.75'
        w='full'
        h='full'
      />
      <Box
        w='full'
        pos='absolute'
        top='90px'
        // pl='20'
        display='flex'
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "30px", md: "100px" }}
        alignItems='center'
        justifyContent='center'>
        <Box textAlign={{ base: "center", md: "start" }} lineHeight='shorter'>
          <Text
            //   color='#5478a9'
            color='gray.300'
            fontSize='xl'
            fontWeight='light'
            letterSpacing='2px'>
            Welcome to
          </Text>
          <Text
            color='#1FF361'
            fontSize={{ base: "6xl", md: "7xl" }}
            fontWeight='bold'
            letterSpacing='1px'>
            Afia Eke
          </Text>
          <Text
            color='white'
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight='light'>
            Your Online Shopping Mall
          </Text>
          <Button rounded='full' size='lg' mt='6' bg='#1FF361' color='white'>
            Start Shopping
          </Button>
        </Box>
        <SwiperPix />
      </Box>
    </Box>
  );
};

export default Hero;
