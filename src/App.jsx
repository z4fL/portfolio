import React from "react";
import Hero from "./Hero";
import Layout from "./Layout";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

const App = () => {
  return (
    <Layout>
      <main className="px-6 md:px-24 lg:px-32 xl:px-72">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
