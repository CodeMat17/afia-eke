import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import SwiperPix from "./SwiperPix";

const Hero = () => {
  return (
    <Box
      minH={{ base: "90vh", sm: "100vh", md: "95vh" }}
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
        top={{ base: "90px", md: "150px" }}
        // pl='20'
        display='flex'
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "30px", md: "100px" }}
        alignItems='center'
        justifyContent='center'>
        <Box textAlign={{ base: "center", md: "start" }} lineHeight='shorter'>
          <Text
            //   color='#5478a9'
            color='white'
            fontSize='xl'
            fontWeight='light'
            letterSpacing='2px'>
            Welcome to
          </Text>
          <Text
            // color='#FFA101'
            bgGradient='linear(to-l, #F32AC2, #FFA101)'
            bgClip='text'
            fontSize={{ base: "6xl", md: "7xl" }}
            fontWeight='bold'
            letterSpacing='1px'>
            Afia Eke
          </Text>
          <Text
            color='white'
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight='light'>
            Your Online Gift Store
          </Text>
          <Button
            rounded='full'
            size='lg'
            mt='6'
            bg='#F32AC2'
            leftIcon={
              <Image
                width={35}
                height={30}
                alt='shopping logo'
                src='/shopping_logo.png'
              />
            }
            // bgGradient='linear(to-b, #1FF361, green.800 )'
            // bgGradient='linear(to-r, #1FF361, #f32ac2 )'
            color='white'
            _hover={{
              bgGradient: "linear(to-br, #1FF361, #1FF361, #f32ac2 )",
              shadow: "md",
              transform: "translateY(-5px)",
              transitionDuration: "0.2s",
              transitionTimingFunction: "ease-in-out",
            }}>
            Start Shopping
          </Button>
        </Box>
        <SwiperPix />
      </Box>
      <Box pos='absolute' bottom='16' w='120px' h='120px'>
        <AnimatedText img='/animated_text_white.webp' />
      </Box>
    </Box>
  );
};

export default Hero;
