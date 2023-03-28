import { supabase } from "@/lib/supabaseClient";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsCart4 } from "react-icons/bs";

const ProductDetail = ({ product }) => {
  console.log("prod", product);
  const router = useRouter();

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
            <Box
              mt='6'
              display='flex'
              flexDir={{ base: "column", md: "row" }}
              gap='10px'
              w='full'>
              <Button
                w={{ base: "full", md: "70%" }}
                color='white'
                py='6'
                rounded='full'
                bgGradient='linear(to-tl, #1FF361, #1FF361, #f32ac2 )'
                _hover={{
                  bgGradient: "linear(to-bl, #1FF361, #1FF361, #f32ac2 )",
                }}
                rightIcon={<BsCart4 size={25} color='#f32ac2' />}>
                ADD TO CART
              </Button>
              <Button
                onClick={() => router.push("/")}
                w={{ base: "full", md: "30%" }}
                py='6'
                rounded='full'
                variant='outline'
                borderColor='#1FF361'
                color='#f32ac2'
                _hover={{
                  color: "#1FF361",
                }}>
                GO BACK
              </Button>
            </Box>
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
