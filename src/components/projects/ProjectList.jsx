import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <Box as='section' id='project' minH={"100vh"} color="blue.900">
      <Heading textAlign={"center"} pt={200} mb={[6, 8, 10]}>
        My Projects
      </Heading>
      <SimpleGrid minChildWidth={"300px"} columns={[1, 2, 2]} spacing={[4,5,6]}>
        <ProjectCard
          title="iMovies"
          description="React with styled props app to search movie titles from OMDB API"
          bgImg="../../images/movie.png"
        />
        <ProjectCard
          title="Akagum"
          description="Expense tracker app using the useContext and useReducer Hook"
          bgImg="../../images/expense.png"
        />
        <ProjectCard
          title="Task Manager"
          description="Server for tasks management utilzing user authentication(JWT)"
          bgImg="../../images/api.png"
        />
        <ProjectCard
          title="Feedback Loop"
          description="Web application for getting feeback from  clients"
          inProgress="in-Progress"
          bgImg="../../images/feedback.png"

        />
      </SimpleGrid>
    </Box>
  );
};

export default ProjectList;
