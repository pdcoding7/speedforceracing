import { useState } from "react";
import StandingsComponent from "./StandingsComponent";
import StandingsContructorsComponent from "./StandingsContructorsComponent.js";
import DivisionTitle from "./DivisionTitle.js";
import StandingsOverallComponent from "./StandingsOverallComponent.js";

function Tabs() {
	const [currentTab, setCurrentTab] = useState("1");
	const tabs = [
		{
			id: 1,
			tabTitle: "Divison 1",
			content: (
				<>
					<DivisionTitle division="Division 1" typeOf="- Final Driver Standings" id="#gp1Standings" />
					<StandingsComponent league={1} />
					<DivisionTitle division="Division 1" typeOf="- Final Constructors Standings" />
					<StandingsContructorsComponent league={1} />
				</>
			),
		},
		{
			id: 2,
			tabTitle: "Divison 2",
			content: (
				<>
					<DivisionTitle division="Division 2" typeOf="- Driver Standings" id="#gp2Standings" />
					<StandingsComponent league={2} />
					<DivisionTitle division="Division 2" typeOf="- Constructors Standings" />
					<StandingsContructorsComponent league={2} />
				</>
			),
		},
		{
			id: 3,
			tabTitle: "Overall",
			content: (
				<>
					<DivisionTitle division="Cross Div" typeOf="- Final Constructors Standings" />
					<StandingsOverallComponent />
				</>
			),
		},
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className="container">
			<div className="tabs">
				{tabs.map((tab, i) => (
					<button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
						{tab.tabTitle}
					</button>
				))}
			</div>
			<div className="content">
				{tabs.map((tab, i) => (
					<div key={i}>{currentTab === `${tab.id}` && <div>{tab.content}</div>}</div>
				))}
			</div>
		</div>
	);
}

export default Tabs;
