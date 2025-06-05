import Navbar from "./components/Navbar";
import Standings from "./components/Standings";
import StandingsTable from "./components/StandingsTable";
import PastStreams from "./components/PastStreams";
import Gallery from "./components/Gallery";
import HallOfFame from "./components/HallOfFame";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Hero />
			<Calendar />
			<StandingsTable />
			{/* <Standings /> */}
			<PastStreams />
			<Gallery />
			<HallOfFame />
			<Footer />			
		</>
	);
}

export default App;
