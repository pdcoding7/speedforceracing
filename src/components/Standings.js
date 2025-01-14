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
						tabTitle: "Div 1",
						content: (
							<>
								<DivisionTitle division="Division 1" typeOf="- Driver Standings" />
								<StandingsComponent league={1} />
								<DivisionTitle division="Division 1" typeOf="- Constructors Standings" />
								<StandingsContructorsComponent league={1} />
							</>
						),
					},
					{
						id: 2,
						tabTitle: "Div 2",
						content: (
							<>
								<DivisionTitle division="Division 2" typeOf="- Driver Standings" />
								<StandingsComponent league={2} />
								<DivisionTitle division="Division 2" typeOf="- Constructors Standings" />
								<StandingsContructorsComponent league={2} />
							</>
						),
					},
					{
						id: 3,
						tabTitle: "Div 3",
						content: (
							<>
								<DivisionTitle division="Division 3" typeOf="- Driver Standings" />
								<StandingsComponent league={3} />
								<DivisionTitle division="Division 3" typeOf="- Constructors Standings" />
								<StandingsContructorsComponent league={3} />
							</>
						),
					},
					{
						id: 4,
						tabTitle: "Div 4",
						content: (
							<>
								<DivisionTitle division="Division 4" typeOf="- Driver Standings" />
								<StandingsComponent league={4} />
								<DivisionTitle division="Division 4" typeOf="- Constructors Standings" />
								<StandingsContructorsComponent league={4} />
							</>
						),
					},
					// {
					// 	id: 5,
					// 	tabTitle: "OVR",
					// 	content: (
					// 		<>
					// 			<DivisionTitle division="Cross Div" typeOf="- Constructors Standings" />
					// 			<StandingsOverallComponent />
					// 		</>
					// 	),
					// },
				]}
			/>
		</section>
	);
};

export default Standings;
