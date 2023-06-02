import Navbar from "./components/Navbar";
import Standings from "./components/Standings";
import PastStreams from "./components/PastStreams";
import Gallery from "./components/Gallery";
import HallOfFame from "./components/HallOfFame";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Standings />
      <PastStreams />
      <Gallery />
      <HallOfFame />
      <Footer />
    </>
  );
}

export default App;
