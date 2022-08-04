import { useState,useEffect} from "react";
import { Flex, Image, HStack, Link } from "@chakra-ui/react";
import Hamburger from "./Hamburger";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  //change navbar on scroll
  const [isChangeable, setIsChangable] = useState(false);
  const changeHeaderColor = () => {
    window.scrollY > 700 ? setIsChangable(true) : setIsChangable(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);
    return () => {
      window.removeEventListener('scroll', changeHeaderColor);
    }
  }, [])

  return (
    <Flex
      
      position="fixed"
      zIndex={2}
      w={"full"}
      top={0}
      bgColor={isChangeable ? "white" : "gray.100"}
      color= "orange.500"
      minH="10vh"
      px={8}
      py={5}
      align="center"
      justify="space-between"
      sx={{
        a: {
  
          _hover: {
            color: "orange.800",
            textDecoration:'none'
          }
        }
      }}
    >
      <Link as={HashLink} to="#home">
        <Image src="../../images/devlogo.png" w="50px" />
      </Link>
      <HStack
        display={{ base: "none", md: "flex" }}
        fontWeight="bold"
        fontSize="large"
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
