import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <Box
      as="section"
      id="project"
      minH={"100vh"}
      color="blue.900"
      w={['full','full','full','full']}
      mx='auto'
    >
      <Heading
        textAlign={"center"}
        pt={200}
        mb={[6, 8, 10]}
      >
         Projects
      </Heading>
      <SimpleGrid
        minChildWidth={['300px','300px','300px','350px','500px']}
        
        spacing={[4, 4, 4, 6]}
      >
        <ProjectCard
          title="iMovies"
          description="React with styled props app to search movie titles from OMDB API"
          bgImg="../../images/movie.webp"
          live='https://testmovieapp.netlify.app/'
          source='https://github.com/fvlly/slickmedia'
        />
        <ProjectCard
          title="Akagum"
          description="Expense tracker app using the useContext and useReducer Hook"
          bgImg="../../images/expense.webp"
          live='https://akagum.netlify.app/'
          source='https://github.com/fvlly/Budget-Tracker'
        />
        <ProjectCard
          title="Task Manager"
          description="Restful API for handing tasks featuring JSON web tokens"
          backend="backend"
          bgImg="../../images/api.webp"
          source ='https://github.com/fvlly/Task-manager-app-'

        />
        <ProjectCard
          title="Feedback Loop"
          description="Web application for getting feeback from  clients"
          
          bgImg="../../images/feedback.webp"
          live='https://akagum.netlify.app/'
          source='https://github.com/fvlly/Budget-Tracker'

        />
        <ProjectCard
          title="De Noble Club10"
          description="An NGO prompting growth within the Ebira community"
          bgImg="../../images/club10.webp"
          live='https://akagum.netlify.app/'
          source='https://github.com/fvlly/Budget-Tracker'

        />
        <ProjectCard
          title="Wolf Academy"
          description="A platform for learning trading, investing and networking"
          bgImg="../../images/wolfFx.webp"
          live='https://akagum.netlify.app/'
          source='https://github.com/fvlly/Budget-Tracker'

        />
        
      </SimpleGrid>
    </Box>
  );
};

export default ProjectList;
