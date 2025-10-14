import Header from "../components/header";
import Footer from "../components/footer";
import Contents from "./contents";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default Home;
