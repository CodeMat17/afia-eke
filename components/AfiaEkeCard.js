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
        onClick={() => router.push(`/product/${instock ? id : "outofstock"}`)}
        cursor='pointer'
        pos='relative'
        bg='pink.50'
        p='4'
        rounded='xl'
        w={{ base: "full", sm: "180px" }}
        h={{ base: "full", sm: "180px" }}
        display='flex'
        justifyContent='center'>
        <Image alt={name} width={200} height={150} src={image} />
        <Tag
          pos='absolute'
          left='2'
          top='2'
          gap='4px'
          rounded='full'
          border='1px'
          color={instock ? "#f32ac2" : "red.400"}>
          <TagLabel>{instock ? "In-stock" : "Out In-stock"}</TagLabel>
        </Tag>
        {instock && (
          <>
            {new_stock && (
              <Tag
                pos='absolute'
                bottom='2'
                right='2'
                // size='lg'
                rounded='full'
                opacity='0.7'
                color='white'
                bg='#1FF361'>
                <TagLabel>New</TagLabel>
              </Tag>
            )}
          </>
        )}
      </Box>
      <Box
        w={{ base: "full", sm: "180px" }}
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
          <Box bg='pink.200' shadow='md' rounded='full' p='2'>
            <BiCartDownload size={20} color='black' />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AfiaEkeCard;
