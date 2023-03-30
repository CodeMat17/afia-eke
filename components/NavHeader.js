import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsCart4 } from "react-icons/bs";
import LogoComponent from "./LogoComponent";
import MobileMenu from "./MobileMenu";

const NavHeader = () => {
  const router = useRouter();
  console.log(router.asPath);

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
      bgGradient='linear(to-l, #f32ac2,  gray.800 )'
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
            color='#FFA101'
            fontWeight='semibold'
            alignItems='center'
            gap='6px'>
            <Button
              onClick={() => router.push("/")}
              variant='ghost'
              rounded='full'
              bg={router.asPath === "/" ? "pink.100" : ""}
              _hover={{
                bg: "pink.100",
                transform: "translateY(-5px)",
                transitionDuration: "0.8s",
                transitionTimingFunction: "ease-in-out",
              }}>
              HOME
            </Button>
            {/* <Box
                pos='absolute'
                // left='0'
                // right='0'
                bottom='-1'
                _groupHover={{
                  w: "60px",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                }}
                w={router.asPath === "/" ? "60px" : "0px"}
                h='2px'
                bg='blue.700'
              /> */}

            <Button
              onClick={() => router.push("/about-us")}
              variant='ghost'
              rounded='full'
              display={{ base: "none", md: "flex" }}
              bg={router.asPath === "/about-us" ? "pink.100" : ""}
              _hover={{
                bg: "pink.100",
                transform: "translateY(-5px)",
                transitionDuration: "0.8s",
                transitionTimingFunction: "ease-in-out",
              }}>
              ABOUT US
            </Button>

            <Button
              onClick={() => router.push("/contact-us")}
              variant='ghost'
              rounded='full'
              bg={router.asPath === "/contact-us" ? "pink.100" : ""}
              _hover={{
                bg: "pink.100",
                transform: "translateY(-5px)",
                transitionDuration: "0.8s",
                transitionTimingFunction: "ease-in-out",
              }}>
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
              bg='#ffa101'
              rounded='full'
              px='2'
              color='black'
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
