import React from "react";
import { Container } from "@chakra-ui/react";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import ProductList from "./components/projects/ProductList.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Container maxW={'80%'} mx='auto'>
        <About />
        <ProductList />
        <Contact />
      </Container>
    </>
  );
};

export default App;
