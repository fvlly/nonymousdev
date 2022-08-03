import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Box,
  Icon,
  useDisclosure,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <Icon as={GiHamburgerMenu} />
      </Button>
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.200">
          <DrawerCloseButton>
            <Icon as={AiOutlineClose} w={6} h={6} />
          </DrawerCloseButton>
          <DrawerBody mt={6}>
            <VStack
              fontWeight="bold"
              fontSize="large"
              spacing={20}
            >
              <Link  as={HashLink} to="#About" onClick={onClose}>
                About
              </Link>
              <Link as={HashLink} to="#Project">
                Projects
              </Link>
              <Link as={HashLink} to="#contact">
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Hamburger;
