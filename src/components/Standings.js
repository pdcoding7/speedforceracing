import SectionTitle from "./SectionTitle.js";
import Tabs from "./Tabs.js";
import StandingsComponent from "./StandingsComponent";
import StandingsContructorsComponent from "./StandingsContructorsComponent.js";
import DivisionTitle from "./DivisionTitle.js";
import StandingsOverallComponent from "./StandingsOverallComponent.js";

const Standings = () => {
	return (
		<section className="section" id="standings">
			<SectionTitle sectionTitle="Standings"></SectionTitle>
			<Tabs
				tabs={[
					{
						id: 1,
						tabTitle: "Division 1",
						content: (
							<>
								<DivisionTitle division="Division 1" typeOf="- Driver Standings" id="#gp1Standings" />
								<StandingsComponent league={1} />
								<DivisionTitle division="Division 1" typeOf="- Constructors Standings" />
								<StandingsContructorsComponent league={1} />
							</>
						),
						defaultTab: true,
					},
					{
						id: 2,
						tabTitle: "Division 2",
						content: (
							<>
								<DivisionTitle division="Division 2" typeOf="- Driver Standings" id="#gp1Standings" />
								<StandingsComponent league={2} />
								<DivisionTitle division="Division 2" typeOf="- Constructors Standings" />
								<StandingsContructorsComponent league={2} />
							</>
						),
						defaultTab: false,
					},
					{
						id: 3,
						tabTitle: "Overall",
						content: (
							<>
								<DivisionTitle division="Cross Div" typeOf="- Constructors Standings" />
								<StandingsOverallComponent />
							</>
						),
						defaultTab: false,
					},
				]}
			/>
		</section>
	);
};

export default Standings;
