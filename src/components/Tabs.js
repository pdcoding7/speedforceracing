import { useState } from "react";

function Tabs({ tabs }) {
	const [currentTab, setCurrentTab] = useState("1");

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className="container">
			<div className="tabs">
				{tabs.map((tab, i) => (
					<button key={i} id={tab.id} onClick={handleTabClick} className={currentTab === String(tab.id) ? "activeTab" : ""}>
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
