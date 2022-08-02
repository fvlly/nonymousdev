import { VStack, Box, Heading, Text, Flex, Button } from "@chakra-ui/react/";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, inProgress, bgImg }) => {
  const renderButton = () => {
    if (inProgress) {
      return (
        <Button
          my={[6, 8]}
          variant="outline"
          size="lg"
          colorScheme="white"
          color='white'
          disabled
        >
          In progress
        </Button>
      );
    }

    return (
      <Flex gap={[3, 4]} my={[4, 6]}>
        <Button variant="outline" size="md" colorScheme="orange">
          View live
        </Button>
        <Button variant="ghost" colorScheme="blue">
          {" "}
          Source Code
        </Button>
      </Flex>
    );
  };

  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition="0.3s linear "
      boxShadow="lg"
      minH={["300px"]}
      borderRadius={["10px", "12px"]}
      border="1px solid"
      borderColor="blue.900"
    >
      <Box
        minH="150px"
        bgImage={bgImg}
        bgSize="cover"
        roundedTop="10px"
        backgroundRepeat="no-repeat"
      ></Box>
      <Box p={[2, 3]} backgroundColor={inProgress && 'blue.900'} color={inProgress && 'white'}>
        <Heading as="h5" fontFamily="'Poppins', sans-serif" my={[4, 6]}>
          {title}
        </Heading>
        <Text fontSize={["18px",'18px', "24px"]}>{description}</Text>
        {renderButton()}
      </Box>
    </Box>
  );
};

export default ProjectCard;
