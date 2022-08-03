import { useRef } from "react";
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
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactRef = useRef();
  //notfiy user on successful submit
  const toast = useToast();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);

  //helper
  const onFormSubmit = (data) => {
    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          reset()
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast({
      title: "Submitted!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      as="section"
      id="contact"
      w={["80%", "60%"]}
      mx="auto"
    >
      <Text
        textAlign={"center"}
        fontSize={["sm", "md", "lg"]}
        mt={[8, 10]}
        color={"blue.500"}
      >
        Doesn't have to end here, let's work together
      </Text>
      <Heading
        as="h2"
        fontSize={["22px", "2xl", "3xl"]}
        mt={4}
        mb={16}
        color="blue.900"
        textAlign={"center"}
      >
        Discuss a project{" "}
      </Heading>

      <form ref={contactRef} onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl
          isInvalid={errors.name || errors.email || errors.message}
          color="blue.900"
        >
          <FormLabel>Name</FormLabel>
          <Input
            {...register("name", {
              required: "Please enter your name",
            })}
            type="text"
            placeholder="Your Name"
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
          <FormLabel>Email address</FormLabel>
          <Input
            {...register("email", { required: "Please enter Valid email" })}
            type="email"
            placeholder="Your Email"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>

          <Textarea
            {...register("message", {
              required: "Kindly leave a message ",
              minLength: 40,
            })}
            mt={4}
            placeholder="Your Message"
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>

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
