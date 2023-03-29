import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import LogoComponent from "./LogoComponent";

const Footer = () => {
  return (
    <>
      <Box color='gray.400' w='full' px='4' py='6' bg='gray.800'>
        <Box maxW='6xl' mx='auto'>
          <Box lineHeight='1'>
            <LogoComponent />
            <Text fontSize='sm' w='180px' textAlign='end'>
              Your online gift store
            </Text>
          </Box>

          <Box my='8'>
            <SimpleGrid
              spacing='30px'
              columns={{ base: 1, sm: "2", md: 3, lg: 4 }}>
              <Box>
                <Text fontSize='lg' color='white' mb='1'>
                  LINKS
                </Text>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
              </Box>

              <Box>
                <Text fontSize='lg' color='white' mb='1'>
                  ADDRESS
                </Text>
                <Text>Head Office:</Text>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  voluptate qui quod!
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Text bg='green.800' px='4' py='6' textAlign='center' color='white'>Afia Eke, &copy; 2023. All rights rserved.</Text>
    </>
  );
};

export default Footer;
