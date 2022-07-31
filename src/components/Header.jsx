import { Flex, Image, HStack, Text, Link } from "@chakra-ui/react";
import Hamburger from "./Hamburger";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      position="sticky"
      bgColor="gray.200"
      minH="10vh"
      px={6}
      py={5}
      align="center"
      justify="space-between"
    >
      <Image src="../../images/devlogo.png" w="50px" />
      <HStack
        display={{ base: "none", md: "flex" }}
        fontWeight="bold"
        fontSize="large"
        fontFamily="'Poppins', sans-serif"
        as="nav"
        spacing={5}
      >
        <Link as={ReactRouterLink} to="/">
          Home
        </Link>
        <Link as={ReactRouterLink} to="/">
          About
        </Link>
        <Link as={ReactRouterLink} to="/">
          Project
        </Link>
      </HStack>
      <Hamburger />

    </Flex>
  );
};

export default Header;
