import { Box, Tag, TagLabel, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiCartDownload } from "react-icons/bi";

const AfiaEkeCard = ({ id, name, price, image, instock, new_stock }) => {
  const router = useRouter();

  return (
    <Box
      my='4'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      opacity={instock ? 1 : 0.5}>
      <Box
        onClick={() => router.push(`/product/${instock ? id : 'outofstock'}`)}
        cursor='pointer'
        pos='relative'
        bg='gray.100'
        p='4'
        rounded='xl'
        w={{ base: "full", sm: "220px" }}
        h={{ base: "full", sm: "220px" }}
        display='flex'
        justifyContent='center'>
        <Image alt={name} width={200} height={150} src={image} />
        <Tag
          pos='absolute'
          left='4'
          gap='4px'
          size='lg'
          opacity='0.55'
          color={instock ? "white" : "red.500"}
          bg={instock ? "#5478a9" : "red.100"}>
          {/* {instock && <TagRightIcon as={FaThumbsUp} color='yellow.400' />} */}
          <TagLabel>{instock ? "In-stock" : "Out In-stock"}</TagLabel>
        </Tag>
        {instock && (
          <>
            {new_stock && (
              <Tag
                pos='absolute'
                bottom='4'
                right='4'
                size='lg'
                opacity='0.55'
                color='red'
                bg='gray.300'>
                <TagLabel>New</TagLabel>
              </Tag>
            )}
          </>
        )}
      </Box>
      <Box
        w={{ base: "full", sm: "220px" }}
        pt='1'
        px=''
        display='flex'
        justifyContent='space-between'
        alignItems='center'>
        <Box>
          <Text fontSize='' noOfLines='1'>
            {name}
          </Text>
          <Text>₦{price}</Text>
        </Box>
        {instock && (
          <Box bg='gray.100' rounded='full' p='2' shadow='md'>
            <BiCartDownload size={20} color='#5478a9' />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AfiaEkeCard;
