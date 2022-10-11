import {lazy,Suspense} from "react";
import { Box,Container } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
// import Contact from "./components/Contact";
import ProjectList from "./components/projects/ProjectList.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const LazyContact = lazy(()=> import("./components/Contact.jsx"))

const App = () => {

  const { ref:contactRef, inView:contactInView, } = useInView({// contact page
    threshold: 0.0, 
    triggerOnce:true
  });




  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Container maxW={"80%"} mx="auto">
         <Suspense fallback={'...loading'}>
          <About />
          <ProjectList />
          <Box as='section' ref={contactRef} >{contactInView && <LazyContact />}</Box> 
         </Suspense>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
