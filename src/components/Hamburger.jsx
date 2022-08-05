import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Icon,
  useDisclosure,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";

import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <Icon as={GiHamburgerMenu}  w={6} h={6}  />
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
            pt={20}
              sx={{
                a: {
                  _hover: {
                    color: "orange.800",
                    scale:1.1,
                    textDecoration: "none",
                  },
                },
              }}
              fontWeight="bold"
              fontSize="45px"
              spacing={20}
            >
              <Link as={HashLink} to="#about" onClick={onClose}>
                About
              </Link>
              <Link as={HashLink} to="#project" onClick={onClose}>
                Projects
              </Link>
              <Link as={HashLink} to="#contact" onClick={onClose}>
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
