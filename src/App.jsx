import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_left,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#0808080a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-30%] h-[1000px] w-[1200px] rounded-full bg-[radial-gradient(circle_700px_at_40%_500px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero  />
        <Technologies />
        <Experience />
        <Projects />
        
        <Contact  />
      </div>
    </div>
  );
};

export default App;
