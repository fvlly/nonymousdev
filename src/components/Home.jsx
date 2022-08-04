import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import lottie from "lottie-web/build/player/lottie_light";
import heroblob from "../lottie/heroblob.json";

//animations

const containerVariants = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  hover: {
    scale: 1.2,
  },
};

const buttonVariants = {
  hidden: {
    y: 20,
  },
  visible: {
    y: 0,
    transition: {
      yoyo: Infinity,
    },
  },
  hover: {
    backgroundColor: "blue.700",
    scale: 1.1,
    transition: {
      yoyo: 10,
    },
  },
};

const linkVariants = {
  hover: {
    y: [-10, 0, 10, 5, 0],
    scale: 1.2,
    color: "orange.500",
    transition: {
      delay: 0.5,
    },
  },
};

const Home = () => {
  const lottieRef = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current,
      animationData: heroblob,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

  
  }, []);


  return (
    <Box
      as="section"
      bgColor="gray.100"
      position="relative"
      display="flex"
      minH="100vh"
      alignItems={"center"}
      justifyContent="center"
      id="home"
    >
      <Box
        color="blue.900"
        width={["70%"]}
        textAlign="center"
        position="absolute"
        top="30%"
      >
        <Text
          as={motion.h2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          fontSize={["16px", "30px", "30px", "40px"]}
          lineHeight={["30px", "45px", "45px", "65px"]}
        >
          Meet
        </Text>
        <Heading
          as={motion.h2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          fontSize={["28px", "40px", "50px", "80px"]}
          lineHeight={["40px", "60px", "60px", "96px"]}
          color="orange.700"
        >
          Luqman Ibrahim
        </Heading>
        <Text
          as={motion.h2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          fontSize={["18px", "30px", "30px", "35px"]}
          lineHeight={["30px", "45px", "45px", "60px"]}
        >
          A dedicated self-taught FullStack Developer
        </Text>
        <Flex
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          my={[8, 10]}
          justify="center"
        >
          <Link as={HashLink} to="#project">
            <Button
              as={motion.button}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              fontSize={["initial", "md", "large"]}
              bgColor="blue.900"
              color="white"
              rounded="20px"
              w="200px"
              size={["sm", "md", "lg"]}
            >
              View Projects
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition=".7s ease-in 2s"
        >
          <HStack pt={20} spacing={[8, 10, 12]}>
            <Link
              as={motion.a}
              variants={linkVariants}
              whileHover="hover"
              href="https://www.linkedin.com/in/luqman-ibrahim-62955222a/"
            >
              <Icon as={AiFillLinkedin} w={[6, 8]} h={[6, 8]} />
            </Link>
            <Link
              as={motion.a}
              variants={linkVariants}
              whileHover="hover"
              href="https://github.com/fvlly"
            >
              <Icon as={AiFillGithub} w={[6, 8]} h={[6, 8]} />
            </Link>
            <Link
              as={motion.a}
              variants={linkVariants}
              whileHover="hover"
              href="https://wa.me/36203147860"
            >
              <Icon as={AiOutlineWhatsApp} w={[6, 8]} h={[6, 8]} />
            </Link>
          </HStack>
        </Flex>
      </Box>
      <Box ref={lottieRef} opacity="0.9"></Box>
    </Box>
  );
};

export default Home;
