import { supabase } from "@/lib/supabaseClient";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  console.log("prod", product);

  return (
    <Box maxW='3xl' mx='auto' px='4' py='20'>
      {product.map((item) => (
        <Box
          display='flex'
          flexDir={{ base: "column" }}
          justifyContent='center'
          alignItems='center' gap='20px'>
          <Box w='250px' h='250px'>
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
            <Button></Button>
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
