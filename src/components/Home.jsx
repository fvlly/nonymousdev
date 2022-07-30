import { Box, Heading, Flex, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      display="flex"
      minH="80vh"
      alignItems={"center"}
      justifyContent="center"
      bgImg='"https://www.transparenttextures.com/patterns/escheresque.png"'
    >
      <Box color="blue.800" width={["70%"]} textAlign="center">
        <Heading
          fontFamily="Montserrat sans-serif"
          fontSize={["28px", "50px","50px", "80px"]}
          lineHeight={["40px", "60px","60px", "96px"]}
        >
          Hi, I'm Luqman Ibrahim , I'm a full stack FE heavy web developer
        </Heading>
        <Flex justify="center" gap="6" mt={[6, 8]} >
          <Button colorScheme="orange" fontSize={['18px','24px']} lineHeight={[1.5,2]} size={["sm", "md", "lg"]}>
            View Projects
          </Button>
          <Button
            variant="outline"
            colorScheme="orange"
            fontSize={['18px','24px']}
            size={["sm", "md", "lg"]}
          >
            Contact me
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
