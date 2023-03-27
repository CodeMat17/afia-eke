import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiMenuAlt3, HiOutlineHome } from "react-icons/hi";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbSubtask } from "react-icons/tb";

const MobileMenu = () => {
  const router = useRouter();

  return (
    <Box display={{ base: "flex", sm: "none" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HiMenuAlt3 size={25} color='#5478a9' />}
          variant='outline'
          shadow='md'
        />
        <MenuList>
          <Box onClick={() => router.push("/")}>
            <MenuItem icon={<HiOutlineHome size={20} />}>Home</MenuItem>
          </Box>
          <Box onClick={() => router.push("/about-us")}>
            <MenuItem icon={<TbSubtask size={20} />}>About Us</MenuItem>
          </Box>
          <Box onClick={() => router.push("/contact-us")}>
            <MenuItem icon={<MdOutlineContactPhone size={20} />}>
              Contact Us
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
