import { supabase } from "@/lib/supabaseClient";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  console.log("prod", product);

  return (
    <Box maxW='3xl' mx='auto' px='4' py='12'>
      {product.map((item) => (
        <Box
          key={item.id}
          display='flex'
          flexDir={{ base: "column", md: "row" }}
          justifyContent='center'
          alignItems='center'
          gap='70px'>
          <Box
            w={{ base: "250px", md: "500px" }}
            h={{ base: "250px", md: "400px" }}
            display='flex'
            alignItems='center'
            justifyContent='center'>
            <Image
              loading='lazy'
              alt={item.name}
              height={500}
              width={500}
              src={item.image}
            />
          </Box>
          <Box w='full'>
            <Text fontSize='lg'>{item.name}</Text>
            <Text fontWeight='light'>{item.desc}</Text>
            <Button
              w='full'
              mt='6'
              color='white' py='6'
              bgGradient='linear(to-r, #1FF361, pink.500 )'
              _hover={{ bgGradient: "linear(to-l, #1FF361, pink.500 )" }}>
              ADD TO CART
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  return {
    props: { product },
  };
}

export default ProductDetail;
