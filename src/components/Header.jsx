import { Flex, Image, HStack, Text, Link } from "@chakra-ui/react";
import Hamburger from "./Hamburger";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <Flex
      position="sticky"
      top={0}
      bgColor="gray.200"
      minH="10vh"
      px={6}
      py={5}
      align="center"
      justify="space-between"
    >
      <Link as={HashLink} to="#home">
        <Image src="../../images/devlogo.png" w="50px" />
      </Link>
      <HStack
        display={{ base: "none", md: "flex" }}
        fontWeight="bold"
        fontSize="large"
        fontFamily="'Poppins', sans-serif"
        as="nav"
        spacing={5}
      >
        <Link textDecoration="none" as={HashLink} to="#about">
          About
        </Link>
        <Link textDecoration="project" as={HashLink} to="#project">
          Project
        </Link>
        <Link as={HashLink} to="#contact" textDecoration="none">
          Contact
        </Link>
      </HStack>
      <Hamburger />
    </Flex>
  );
};

export default Header;
