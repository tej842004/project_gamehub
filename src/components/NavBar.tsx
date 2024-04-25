import { HStack, Img } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Img src={logo} boxSize="60px"></Img>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
