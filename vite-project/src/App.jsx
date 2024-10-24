import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <div className=" h-auto w-auto relative z-0 bg-slate-800">
        <Header />
        <Home />
        <About />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
