import React from "react";
import { Container } from "@chakra-ui/react";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact";
import ProjectList from "./components/projects/ProjectList.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Container maxW={"80%"} mx="auto">
          <About />
          <ProjectList />
          <Contact />
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
