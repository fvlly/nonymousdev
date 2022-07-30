import {
  Box,
  Heading,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Alert,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box as='section' w='60%' mx='auto'>
         <Heading my={16} color="blue.900" textAlign={"center"}>
        {" "}
        Contact
      </Heading>
      <Text textAlign={"center"} mb={[6, 8]} color={"blue.900"}>
        Doesn't have to end here, let's work together
      </Text>
      <FormControl color="blue.900">
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Your Name" />
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Your Email" />
        <Textarea mt={4} placeholder="Your Message" />
        <Flex my={[4, 6]} py={["10px", "20px"]} justifyContent={"end"}>
          <Button size={["sm", "md", "lg"]} colorScheme="orange">
            {" "}
            Submit{" "}
          </Button>
        </Flex>
      </FormControl>
     
    </Box>
  );
};

export default Contact;
