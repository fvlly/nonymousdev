import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <Box
      as="section"
      id="project"
      minH={"100vh"}
      color="blue.900"
      w={['full','full','full','80%']}
      mx='auto'
    >
      <Heading
        textAlign={"center"}
        pt={200}
        mb={[6, 8, 10]}
      >
        My Projects
      </Heading>
      <SimpleGrid
        minChildWidth={"300px"}
        columns={[1, 2, 2,2]}
        spacing={[4, 5, 6, 8]}
      >
        <ProjectCard
          title="iMovies"
          description="React with styled props app to search movie titles from OMDB API"
          bgImg="../../images/movie.png"
          live='https://testmovieapp.netlify.app/'
          source='https://github.com/fvlly/slickmedia'
        />
        <ProjectCard
          title="Akagum"
          description="Expense tracker app using the useContext and useReducer Hook"
          bgImg="../../images/expense.png"
          live='https://akagum.netlify.app/'
          source='https://github.com/fvlly/Budget-Tracker'
        />
        <ProjectCard
          title="Task Manager"
          description="Restful API for handing tasks featuring JSON web tokens"
          backend="backend"
          bgImg="../../images/api.png"
          source ='https://github.com/fvlly/Task-manager-app-'

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
