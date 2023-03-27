import { Box, Button, chakra, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiGridSmall } from "react-icons/bi";
import { GiAmpleDress, GiHoodie } from "react-icons/gi";
import { RiFootprintFill } from "react-icons/ri";
import { TbShirtSport } from "react-icons/tb";
import AfiaEkeCard from "./AfiaEkeCard";

const AfiaEke = ({ products }) => {
  const [allProducts, setAllProducts] = useState(products);
  const filter = (type) => {
    setAllProducts(null);
    setAllProducts(products.filter((product) => product.type === type));
  };
  const [activeBtn, setActiveBtn] = useState("all");

  console.log(allProducts);
  return (
    <Box px='4' py='16' maxW='6xl' mx='auto'>
      <Text textAlign='center' color='gray'>
        Categories
      </Text>
      <Text fontSize='4xl' fontWeight='light' textAlign='center'>
        Products in{" "}
        <chakra.span color='#5478a9' fontWeight='semibold'>
          Afia
        </chakra.span>
      </Text>
      <Box bg='#5478a9' w='200px' h='1.5px' rounded='full' mx='auto' />

      <Box
        display='flex'
        overflowX='auto'
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.7rem",
            height: "0.5rem",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
            bg: "#b8b8b8",
          },
          "&::-webkit-scrollbar-track": {
            width: "2px",
            // bg: "#f7f6f9",
          },
          // "&::-webkit-scrollbar-thumb:hover": {
          //   bg: "#929292",
          // },
        }}>
        <Box
          display='flex'
          w='full'
          justifyContent={{ base: "start", md: "center" }}
          gap='5px'
          overflowX='auto'
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          py='8'>
          <Button
            onClick={() => {
              setActiveBtn("all");
              setAllProducts(products);
            }}
            leftIcon={<BiGridSmall />}
            size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            color={activeBtn === "all" ? "white" : ""}
            bg={activeBtn === "all" ? "#5478a9" : ""}
            _hover={{
              color: "blue.200",
              border: "1px",
              borderColor: "blue.200",
              shadow: "md",
            }}>
            All
          </Button>
          <Button
            onClick={() => {
              setActiveBtn("shirt");
              filter("shirt");
            }}
            leftIcon={<TbShirtSport />}
            size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            color={activeBtn === "shirt" ? "white" : ""}
            bg={activeBtn === "shirt" ? "#5478a9" : ""}
            _hover={{
              color: "blue.200",
              border: "1px",
              borderColor: "blue.200",
              shadow: "md",
            }}>
            Shirts
          </Button>
          <Button
            onClick={() => {
              setActiveBtn("shoe");
              filter("shoe");
            }}
            leftIcon={<RiFootprintFill />}
            size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            color={activeBtn === "shoe" ? "white" : ""}
            bg={activeBtn === "shoe" ? "#5478a9" : ""}
            _hover={{
              color: "blue.200",
              border: "1px",
              borderColor: "blue.200",
              shadow: "md",
            }}>
            Shoes
          </Button>
          <Button
            onClick={() => {
              setActiveBtn("dress");
              filter("dress");
            }}
            leftIcon={<GiAmpleDress />}
            size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            color={activeBtn === "dress" ? "white" : ""}
            bg={activeBtn === "dress" ? "#5478a9" : ""}
            _hover={{
              color: "blue.200",
              border: "1px",
              borderColor: "blue.200",
              shadow: "md",
            }}>
            Dresses
          </Button>
          <Button
            onClick={() => {
              setActiveBtn("hoodie");
              filter("hoodie");
            }}
            leftIcon={<GiHoodie />}
            size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            color={activeBtn === "hoodie" ? "white" : ""}
            bg={activeBtn === "hoodie" ? "#5478a9" : ""}
            _hover={{
              color: "blue.200",
              border: "1px",
              borderColor: "blue.200",
              shadow: "md",
            }}>
            Hoodies
          </Button>
        </Box>
      </Box>

      {allProducts.length === 0 ? (
        <Text textAlign='center' pt='8' pb='32'>
          {" "}
          Selected product(s) not available at the moment. Please try later.
        </Text>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacingX='20px'>
          {allProducts.length === 0 && (
            <Box
              border='1px'
              textAlign='center'
              w='full'
              mx='auto'
              display='flex'
              justifyContent='center'></Box>
          )}
          {allProducts.map((product) => (
            <AfiaEkeCard key={product.id} {...product} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default AfiaEke;
