import { Center, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <Center py={8} backgroundColor="orange.500" as="footer">
      <Flex fontWeight="bold" color="white" align='center'>
        <Text  >
          nonymousDEv
        </Text>
        <AiOutlineCopyrightCircle />
        {`${new Date().getFullYear()}`}
      </Flex>
    </Center>
  );
};

export default Footer;
