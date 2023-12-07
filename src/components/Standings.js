import SectionTitle from "./SectionTitle.js";
import DivisionTitle from "./DivisionTitle.js";
import StandingsComponent from "./StandingsComponent.js";
import StandingsContructorsComponent from "./StandingsContructorsComponent.js";
import StandingsOverallComponent from "./StandingsOverallComponent.js";

const Standings = () => {
	return (
		<section className="section" id="standings">
			<div id="gp1Standings">
				<SectionTitle sectionTitle="Standings"></SectionTitle>
				<DivisionTitle division="Div 1" typeOf="- Driver Standings" />
				<StandingsComponent league={1} />
				<DivisionTitle division="Div 1" typeOf="- Constructors Standings" />
				<StandingsContructorsComponent league={1} />
			</div>
			<div id="gp2Standings">
				<DivisionTitle division="Div 2" typeOf="- Driver Standings" />
				<StandingsComponent league={2} />
				<DivisionTitle division="Div 2" typeOf="- Constructors Standings" />
				<StandingsContructorsComponent league={2} />
			</div>
			<div id="crossDivStandings">
				<DivisionTitle division="Cross Div" typeOf="- Constructors Standings" />
				<StandingsOverallComponent />
			</div>
		</section>
	);
};

export default Standings;
