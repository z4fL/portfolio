import Layout from "./Layout";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Layout>
      <main className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
