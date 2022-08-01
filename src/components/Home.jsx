import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import lottie from "lottie-web/build/player/lottie_light";
import heroblob from "../lottie/heroblob.json";

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

    // return lottie.stop();
  }, []);

  console.log(lottieRef);

  return (
    <Box as='section'
      bgColor="gray.100"
      position="relative"
      display="flex"
      minH="100vh"
      alignItems={"center"}
      justifyContent="center"
      id='home'
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
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition="0.5s ease-in"
          fontFamily="'Poppins', sans-serif"
          fontSize={["16px", "30px", "30px", "40px"]}
          lineHeight={["30px", "45px", "45px", "65px"]}
        >
          Meet
        </Text>
        <Heading
          as={motion.h2}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition=".7s ease-in 1s"
          whileHover={{ scale: 1.2 }}
          fontFamily="'Poppins', sans-serif"
          fontSize={["28px", "40px", "50px", "80px"]}
          lineHeight={["40px", "60px", "60px", "96px"]}
          color="orange.700"
        >
          Luqman Ibrahim
        </Heading>
        <Text
          as={motion.h2}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition=".5s ease-in 1.5s"
          fontFamily="'Poppins', sans-serif"
          fontSize={["18px", "30px", "30px", "35px"]}
          lineHeight={["30px", "45px", "45px", "60px"]}
        >
          A dedicated self-taught FullStack Developer
        </Text>
        <Flex my={[8, 10]} justify="center">
          <Button
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "blue.600" }}
            whileTap={{scale:0.9}}
            transition=".7s ease-in 2s"
            fontFamily="'Poppins', sans-serif"
            fontSize={["initial", "md", "large"]}
            bgColor="blue.900"
            color="white"
            rounded="20px"
            w="200px"
            size={["sm", "md", "lg"]}
          >
            View Projects
          </Button>
        </Flex>
        <Flex
          justify="center"
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition=".7s ease-in 2s"
        >
          <HStack>
            <Icon as={AiFillLinkedin} w={[6, 8]} h={[6, 8]} />
            <Icon as={AiFillGithub} w={[6, 8]} h={[6, 8]} />
            <Icon as={AiOutlineWhatsApp} w={[6, 8]} h={[6, 8]} />
          </HStack>
        </Flex>
      </Box>
      <Box ref={lottieRef} opacity="0.9"></Box>
    </Box>
  );
};

export default Home;
