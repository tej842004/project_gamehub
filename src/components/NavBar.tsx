import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Img src={logo} boxSize="60px"></Img>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
