import { VStack, Box, Heading, Text, Flex, Button } from "@chakra-ui/react/";

const ProjectCard = ({ title, description, inProgress,bgImg }) => {
  const renderButton = () => {
    if (inProgress) {
      return (
        <Button
          my={[6, 8]}
          variant="outline"
          size="md"
          colorScheme="orange"
          disabled
        >
          Coming soon
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
        roundedTop='10px'
        backgroundRepeat="no-repeat"
      ></Box>
      <Box p={[2, 3]}>
        <Heading as="h5" fontFamily="Montserrat sans-serif" my={[4, 6]}>
          {title}
        </Heading>
        <Text fontFamily="Montserrat sans-serif" fontSize={["18px", "24px"]}>
          {description}
        </Text>
        {renderButton()}
      </Box>
    </Box>
  );
};

export default ProjectCard;
