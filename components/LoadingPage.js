import { Box, Spinner, Text } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Box
      w='full'
      minH='100vh'
      bg='white'
      color='green.600'
      opacity='0.67'
      display='flex'
      flexDir='column'
      alignItems='center'
      pt='24' //   justifyContent='center'
    >
      <Spinner p='8' />
      <Text py='6' letterSpacing='1px'>
        Please wait
      </Text>
    </Box>
  );
};

export default LoadingPage;
