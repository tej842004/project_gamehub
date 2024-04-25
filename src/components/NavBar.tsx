import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Img src={logo} boxSize="60px"></Img>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
