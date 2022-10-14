import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { headerVariant, bodyVariant } from "../motionVariants";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <Flex
      ref={ref}
      as="section"
      color="blue.900"
      minHeight={"100vh"}
      direction="column"
      align="center"
      id="about"
    >
      <Heading
        as={motion.h2}
        variants={headerVariant}
        initial="hidden"
        animate={inView && "visible"}
        textAlign={"center"}
        pt={200}
        pb={10}
      >
        About
      </Heading>

      <VStack
        w={["full", "full", "full", "80%"]}
        as={motion.div}
        variants={bodyVariant}
        initial="hidden"
        animate={inView && "visible"}
        fontSize={["18px", "18px", "24px"]}
        fontWeight={[400]}
        spacing={[6, 8]}
      >
        <Text>
          I'm a frontend heavy fullstack developer who is passionate about
          creating solutions that impact livelihood and business outcomes. I
          have a knack for mutual learning and self-development which challenges
          me constantly to exhibit high technical problem solving skills.
        </Text>
        <Text>
          I have got a degree in Civil Engineering,albeit I picked up coding
          around the time from electives, this improved my thinking while also
          sparking some creativity, making my switch to Frontend developemnt
          inevtiable.
        </Text>
        <Text>
          I am a Nigerian based developer willing to apply myself within
          organisations that are exciting and support both individual and
          corporate growth while developing telling solutions.
        </Text>
      </VStack>
    </Flex>
  );
};

export default About;
