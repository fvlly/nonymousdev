import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
const About = () => {
  return (
    <Flex
      color="blue.900"
      minHeight={"100vh"}
      direction="column"
      align="center"
    >
      <Heading
        fontFamily="'Poppins', sans-serif"
        textAlign={"center"}
        mt={[28, 32]}
        my="8"
      >
        About
      </Heading>

      <VStack
        fontFamily="'Poppins', sans-serif"
        fontSize={["18px", "24px"]}
        fontWeight={[400]}
        spacing={[6, 8]}
      >
        <Text>
          I'm a frontend heavy fullstack developer who is passionate about creating solution that impact livelihood and business outcomes.
          I have a knack for mutual learning and self-development which challenges me constantly to exhibit high technical problem solving skills.
          currently freelancing.
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
