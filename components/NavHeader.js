import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsCart4 } from "react-icons/bs";
import LogoComponent from "./LogoComponent";
import MobileMenu from "./MobileMenu";

const NavHeader = () => {
  const router = useRouter();

  return (
    <Box
      as='nav'
      pos='sticky'
      top='0'
      zIndex='60'
      py='3'
      // pr='1'
      pl='4'
      bg='white'
      bgGradient='linear(to-l, transparent, gray.400, gray.700 )'
      opacity='0.95'
      shadow='md'>
      <Box
        maxW='6xl'
        mx='auto'
        display='flex'
        alignItems='center'
        justifyContent='space-between'>

        <LogoComponent />

        <Box display='flex' alignItems='flex-end'>
          <Box
            display={{ base: "none", sm: "flex" }}
            color='#5478a9'
            fontWeight='semibold'
            alignItems='center'>
            <Button
              onClick={() => router.push("/")}
              variant='ghost'
              rounded='full'>
              HOME
            </Button>
            <Button
              variant='ghost'
              rounded='full'
              display={{ base: "none", md: "flex" }}>
              ABOUT US
            </Button>
            <Button variant='ghost' rounded='full'>
              CONTACT US
            </Button>
          </Box>
          <Box
            onClick={() => router.push("/orders")}
            cursor='pointer'
            ml='6'
            mr='10'
            pos='relative'>
            <BsCart4 size={25} color='black' />
            <Box
              bg='#f32ac2'
              rounded='full'
              px='2'
              color='white'
              pos='absolute'
              top='-3'
              right='-4'>
              0
            </Box>
          </Box>
          <MobileMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default NavHeader;
