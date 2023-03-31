import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Image as ChakraImage,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pixs = [
  { id: 1, img: "/swiper-pix/pix1.png" },
  { id: 2, img: "/swiper-pix/pix2.png" },
  { id: 3, img: "/swiper-pix/pix3.png" },
  { id: 4, img: "/swiper-pix/pix4.png" },
  { id: 5, img: "/swiper-pix/pix5.png" },
  { id: 6, img: "/swiper-pix/pix6.png" },
  { id: 7, img: "/swiper-pix/pix7.png" },
  { id: 8, img: "/swiper-pix/pix8.png" },
];

const SwiperPix = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Box pos='relative' w={{ base: "350px", md: "400px", lg: "420px" }}>
      <ChakraImage
        w={{ base: "350px", md: "400px", lg: "420px" }}
        h={{ base: "350px", md: "400px", lg: "420px" }}
        animation={animation}
        src='animated_text_ow.webp'
      />
      <Box
        pos='absolute'
        left={{ base: "85px", md: "110px", lg: "120px" }}
        top={{ base: "80px", md: "110px" }}
        w={{ base: "180px", sm: "180px" }}
        h={{ base: "180px", sm: "180px" }}>
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          pagination={{ dynamicBullets: true }}
          modules={[Autoplay]}
          className='mySwiper'>
          {pixs.map((pix) => (
            <SwiperSlide key={pix.id}>
              <Image alt='products' height={400} width={400} src={pix.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default SwiperPix;
