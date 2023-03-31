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
        <chakra.span
          bgClip='text'
          bgGradient='linear(to-l, #F32AC2, #FFA101)'
          fontWeight='semibold'>
          Afia
        </chakra.span>
      </Text>
      <Box
        bgGradient='linear(to-l, #F32AC2, #FFA101)'
        w='120px'
        h='3px'
        rounded='full'
        mx='auto'
      />

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
          },
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
            // size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            borderColor={activeBtn === "all" ? "" : "#FFA101"}
            color={activeBtn === "all" ? "white" : "#FFA101"}
            bg={activeBtn === "all" ? "#f32ac2" : ""}
            _hover={{
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
            rounded='full'
            variant='outline'
            flexShrink='0'
            borderColor={activeBtn === "shirt" ? "" : "#FFA101"}
            color={activeBtn === "shirt" ? "white" : "#FFA101"}
            bg={activeBtn === "shirt" ? "#f32ac2" : ""}
            _hover={{
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
            // size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            borderColor={activeBtn === "shoe" ? "" : "#FFA101"}
            color={activeBtn === "shoe" ? "white" : "#FFA101"}
            bg={activeBtn === "shoe" ? "#f32ac2" : ""}
            _hover={{
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
            // size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            borderColor={activeBtn === "dress" ? "" : "#FFA101"}
            color={activeBtn === "dress" ? "white" : "#FFA101"}
            bg={activeBtn === "dress" ? "#f32ac2" : ""}
            _hover={{
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
            // size='lg'
            rounded='full'
            variant='outline'
            flexShrink='0'
            borderColor={activeBtn === "hoodie" ? "" : "#FFA101"}
            color={activeBtn === "hoodie" ? "white" : "#FFA101"}
            bg={activeBtn === "hoodie" ? "#f32ac2" : ""}
            _hover={{
              shadow: "md",
            }}>
            Hoodies
          </Button>
        </Box>
      </Box>

      {!allProducts && (
        <Text textAlign='center' py='12'>
          No Product is available at the moment
        </Text>
      )}

      {allProducts && allProducts.length === 0 ? (
        <Text textAlign='center' pt='8' pb='32'>
          {" "}
          Selected product(s) not available at the moment. Please try later.
        </Text>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacingX='20px'>
          {allProducts &&
            allProducts.map((product) => (
              <AfiaEkeCard key={product.id} {...product} />
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default AfiaEke;
