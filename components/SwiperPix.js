import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedText from "./AnimatedText";

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
  return (
      <Box w={{ base: "250px", sm: "300px" }} h='250px'>
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
              <Image alt='products' height={600} width={600} src={pix.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
     
  );
};

export default SwiperPix;
