import Navbar from "./components/Navbar";
import Standings from "./components/Standings";
import PastStreams from "./components/PastStreams";
import Gallery from "./components/Gallery";
import HallOfFame from "./components/HallOfFame";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Tabs from "./components/Tabs";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Hero />
			<Calendar />
			<Standings />
			<PastStreams />
			<Gallery />
			<HallOfFame />
			<Footer />
			<Tabs />
		</>
	);
}

export default App;
