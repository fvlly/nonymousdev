import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
const About = () => {
  return (
    <Flex color='blue.900' minHeight={"100vh"} direction='column' align='center'>
      <Heading fontFamily="Montserrat sans-serif" textAlign={"center"} mt={[28, 32]} my='8'>
        About
      </Heading>

      <VStack  fontSize={['18px','24px']} fontWeight={[400,600]} spacing={[6, 8]}>
        <Text>
          I'm a frontend heavy fullstack developer, currently freelancing.
        </Text>
        <Text>
          I'm based in Abuja, Nigeria , where I create pixel perfect web
          application for prosepective clients
        </Text>
      </VStack>
    </Flex>
  );
};

export default About;
