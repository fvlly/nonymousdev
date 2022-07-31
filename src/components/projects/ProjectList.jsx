import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <Box minH={"100vh"} color="blue.900">
      <Heading textAlign={"center"} mb={[6, 8, 10]}>
        My Projects
      </Heading>
      <SimpleGrid minChildWidth={"300px"} columns={[1, 2, 2]} spacing="12px">
        <ProjectCard
          title="React Movie App"
          description="Simple react application that fetch data from OMDB API"
          bgImg="../../images/movie.png"
        />
        <ProjectCard
          title="Akagum"
          description="Expenser that utilizing the context API"
          bgImg="../../images/expense.png"
        />
        <ProjectCard
          title="Task Manager"
          description="Api for creating task and user with Authentication: JW token"
          bgImg="../../images/api.png"
        />
        <ProjectCard
          title="Feedback Loop"
          description="Web application for getting feeback from  clients"
          inProgress="in-Progress"
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProjectList;
