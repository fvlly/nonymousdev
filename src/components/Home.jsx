import { useEffect, useRef } from "react";
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
    <Box
      bgColor="gray.100"
      position="relative"
      display="flex"
      minH="100vh"
      alignItems={"center"}
      justifyContent="center"
    >
      <Box
        color="blue.900"
        width={["70%"]}
        textAlign="center"
        position="absolute"
        top="30%"
      >
        <Text
          as="h5"
          fontFamily="'Poppins', sans-serif"
          fontSize={["16px", "30px", "30px", "40px"]}
          lineHeight={["30px", "45px", "45px", "65px"]}
        >
          Meet
        </Text>
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontSize={["28px", "40px", "50px", "80px"]}
          lineHeight={["40px", "60px", "60px", "96px"]}
          color="orange.700"
        >
          Luqman Ibrahim
        </Heading>
        <Text
          as="h5"
          fontFamily="'Poppins', sans-serif"
          fontSize={["18px", "30px", "30px", "35px"]}
          lineHeight={["30px", "45px", "45px", "60px"]}
        >
          A dedicated self-taught FullStack Developer
        </Text>
        <Flex my={[8, 10]} justify="center">
          <Button
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
        <Flex justify='center'>
          <HStack>
            <Icon as={AiFillLinkedin} w={[6,8]} h={[6,8]} />
            <Icon as={AiFillGithub} w={[6,8]} h={[6,8]}/>
            <Icon as={AiOutlineWhatsApp} w={[6,8]} h={[6,8]}/>
          </HStack>
        </Flex>
      </Box>
      <Box ref={lottieRef} opacity="0.9"></Box>
    </Box>
  );
};

export default Home;
