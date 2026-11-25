import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SceneLoader from "./components/SceneLoader";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import { About, Projects, Skills, Education, Contact } from "./components/Sections";

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <SceneLoader />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}