import "./style.css";
import About from "./contents/about";
import Hero from "./contents/hero";
import Services from "./contents/servic";


function Home() {
  return (
    <div className="main">
      <Hero />
      <Services />
      <About />
    </div>
  );
}

export default Home;
