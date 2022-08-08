import { useEffect, useRef } from "react";
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
    formState,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState, reset]);

  //helper
  const onFormSubmit = (data) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          toast({
            title: "Submitted!",
            status: "info",
            duration: 4000,
            isClosable: true,
          });
        },
        (error) => {
          toast({
            title: error.message,
            status: "danger",
            duration: 4000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box
      as="section"
      id="contact"
      textAlign={"left"}
      w={["100%", "100%", "80%", "60%"]}
      mx="auto"
    >
      <Text fontSize={["sm", "md", "lg"]} mt={[8, 10]} color={"blue.800"}>
        Doesn't have to end here, let's work together
      </Text>
      <Heading
        as="h2"
        fontSize={["22px", "2xl", "3xl"]}
        mt={4}
        mb={16}
        color="blue.900"
      >
        Discuss a project
      </Heading>

      <form ref={contactRef} onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl isInvalid={errors.name} color="blue.900">
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
        </FormControl>
        <FormControl isInvalid={errors.email} color="blue.900">
          <FormLabel>Email address</FormLabel>
          <Input
            {...register("email", { required: "Please enter Valid email" })}
            type="email"
            placeholder="Your Email"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.message} color="blue.900">
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register("message", {
              required: "Kindly leave a message ",
            })}
            placeholder="Your Message"
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>

        <Flex my={[4, 6]} py={["10px", "20px"]} justifyContent={"start"}>
          <Button
            isDisabled={formState.isSubmitting}
            type="submit"
            size={["sm", "md", "lg"]}
            colorScheme="orange"
            isLoading={formState.isSubmitting}
            loadingText="Submitting"
          >
            Send
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Contact;
