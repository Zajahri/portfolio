import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
function App() {
  return (
    <>
      <div className=" h-auto w-auto relative z-0">
        <Header />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
