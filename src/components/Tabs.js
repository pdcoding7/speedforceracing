import { useState } from "react";
import Calendar from "./Calendar";

function Tabs() {
	const [currentTab, setCurrentTab] = useState("1");

	const tabs = [
		{
			id: 1,
			tabTitle: "Divison 1",
			content: <Calendar />,
		},
		{
			id: 2,
			tabTitle: "Divison 2",
			content: <Calendar />,
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
					<div key={i}>
						{currentTab === `${tab.id}` && (
							<div>
								<p>{tab.content}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Tabs;
