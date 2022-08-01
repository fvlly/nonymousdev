import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, formState:{errors} } = useForm();

  //helper
  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box as='section'
      id='contact'
      fontFamily="'Poppins', sans-serif"
      w={["80%", "60%"]}
      mx="auto"
    >
      <Text
        fontFamily="'Poppins', sans-serif"
        textAlign={"center"}
        fontSize={["sm", "md", "lg"]}
        mt={[6, 8]}
        color={"blue.500"}
      >
        Doesn't have to end here, let's work together
      </Text>
      <Heading
        fontFamily="'Poppins', sans-serif"
        as="h2"
        fontSize={["22px", "2xl", "3xl"]}
        mt={4}
        mb={16}
        color="blue.900"
        textAlign={"center"}
      >
        Discuss a project{" "}
      </Heading>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl fontFamily="'Poppins', sans-serif" color="blue.900">
          <FormLabel>Name</FormLabel>
          <Input
            {...register("name", {
              required: "Please enter your name",
            })}
            type="text"
            placeholder="Your Name"
          />
          <FormLabel>Email address</FormLabel>
          <Input
            {...register("email", { required: "Please enter Valid email" })}
            type="email"
            placeholder="Your Email"
          />
          <Textarea
            {...register("message", {
              required: "Kindly leave a message ",
              minLength: 40,
            })}
            mt={4}
            placeholder="Your Message"
          />
          <Flex my={[4, 6]} py={["10px", "20px"]} justifyContent={"end"}>
            <Button
              type="submit"
              size={["sm", "md", "lg"]}
              colorScheme="orange"
            >
              {" "}
              Submit{" "}
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default Contact;
