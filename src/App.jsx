import Layout from "./Layout";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Layout>
      <main className="container mx-auto px-6 sm:px-14 md:px-24 lg:px-32 xl:px-60">
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
