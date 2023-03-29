import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const LogoComponent = () => {
  const router = useRouter();

  return (
    <Box cursor='pointer' onClick={() => router.push("/")} w='180px'>
      <Image alt='logo' src='/default.svg' height={80} width={180} />
    </Box>
  );
};

export default LogoComponent;
