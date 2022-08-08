import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react/";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";

const ProjectCard = ({
  title,
  description,
  inProgress,
  backend,
  bgImg,
  live,
  source,
}) => {
  const renderButton = () => {
    if (inProgress) {
      return (
        <Button
          my={[6, 8]}
          variant="outline"
          size="lg"
          colorScheme="white"
          color="white"
          disabled
        >
          In progress
        </Button>
      );
    }

    if (backend) {
      return <LinkButton borderColor="blue.900" text="Source" href={source} />;
    }

    return (
      <Flex gap={[3, 4]} my={[4, 6]}>
        <LinkButton borderColor="blue.900" text="Live" href={live} />
        <LinkButton
          borderColor="orange.500"
          text="Source"
          color="orange.500"
          href={source}
        />
      </Flex>
    );
  };

  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.9 }}
      transition="0.3s linear "
      boxShadow="lg"
      minH={["300px"]}
      borderRadius={["10px", "12px"]}
    >
      <Box
        minH="150px"
        bgImage={bgImg}
        bgSize="cover"
        roundedTop="10px"
        backgroundRepeat="no-repeat"
      ></Box>
      <Box
        p={[4]}
        backgroundColor={inProgress && "blue.900"}
        color={inProgress && "white"}
      >
        <Heading as="h5"  my={[4, 6]}>
          {title}
        </Heading>
        <Text fontSize={["18px", "18px", "20px"]}>{description}</Text>
        {renderButton()}
      </Box>
    </Box>
  );
};

export default ProjectCard;
