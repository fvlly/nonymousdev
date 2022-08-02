import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { motion,  } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold:.3
  });



//animations

const headerVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: "0",
    transition: {
      delay: 0.5,
    },
  },
};

const bodyVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

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
        initial='hidden'
        animate={inView && 'visible'}
        fontFamily="'Poppins', sans-serif"
        textAlign={"center"}
        pt={200}
        pb={10}
      >
        About
      </Heading>

      <VStack
        as={motion.div}
        variants={bodyVariant}
        initial='hidden'
        animate={inView && 'visible'}

        fontFamily="'Poppins', sans-serif"
        fontSize={["18px", "18px", "24px"]}
        fontWeight={[400]}
        spacing={[6, 8]}
      >
        <Text>
          I'm a frontend heavy fullstack developer who is passionate about
          creating solution that impact livelihood and business outcomes. I have
          a knack for mutual learning and self-development which challenges me
          constantly to exhibit high technical problem solving skills. currently
          freelancing.
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
