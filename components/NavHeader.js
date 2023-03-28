import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsCart4 } from "react-icons/bs";
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
      pr='3'
      pl='2'
      bg='white'
      opacity='0.97'
      shadow='md'>
      <Box
        maxW='6xl'
        mx='auto'
        display='flex'
        alignItems='center'
        justifyContent='space-between'>
        <Box cursor='pointer' onClick={() => router.push("/")}>
          <Image alt='logo' src='/default.svg' height={20} width={130} />
        </Box>

        <Box display='flex' alignItems='flex-end'>
          <Box
            display={{ base: "none", sm: "flex" }}
            color='#5478a9'
            fontSize='lg'
            fontWeight='semibold'
            alignItems='center'>
            <Button
              onClick={() => router.push("/")}
              variant='ghost'
              rounded='full'>
              HOME
            </Button>
            <Button variant='ghost'rounded='full'>ABOUT US</Button>
            <Button variant='ghost'rounded='full'>CONTACT US</Button>
          </Box>
          <Box
            onClick={() => router.push("/orders")}
            cursor='pointer'
            ml='6'
            mr='10'
            pos='relative'>
            <BsCart4 size={25} color='black' />
            <Box
              bg='#1FF361'
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
