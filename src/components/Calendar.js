import CalendarComponent from "./CalendarComponent";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import { useState } from "react";

const TabsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
	flex-wrap: wrap;
	gap: 0.5rem;
	padding: 0 1rem;

	@media (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
`;

const TabRow = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: center;
`;

const Tab = styled.button`
	padding: 1rem 2rem;
	font-size: 1.2rem;
	font-weight: 600;
	color: ${(props) => (props.active ? "#000" : "rgba(0, 0, 0, 0.7)")};
	background: none;
	border: none;
	border-bottom: 3px solid ${(props) => (props.active ? "#000" : "transparent")};
	cursor: pointer;
	transition: all 0.3s ease;
	margin: 0 0.5rem;
	white-space: nowrap;
	position: relative;

	&:hover {
		color: #000;
		border-bottom: 3px solid #000;
	}

	@media (max-width: 768px) {
		padding: 0.75rem 1.25rem;
		font-size: 1rem;
		margin: 0;
	}

	@media (max-width: 480px) {
		padding: 0.5rem 1rem;
	}
`;

const TabContent = styled.div`
	display: ${(props) => (props.active ? "block" : "none")};
	animation: ${(props) => (props.active ? "fadeIn 0.3s ease-in-out" : "none")};

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const Calendar = () => {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<section className="section" id="calendar">
			<SectionTitle sectionTitle="Race Calendar"></SectionTitle>

			<TabsContainer>
				<TabRow>
					<Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
						Division 1
					</Tab>
					<Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
						Division 2
					</Tab>
					<Tab active={activeTab === 3} onClick={() => setActiveTab(3)}>
						Division 3
					</Tab>
				</TabRow>
			</TabsContainer>

			<TabContent active={activeTab === 1}>
				<CalendarComponent src="/images/calender-div-1-s19.png" />
			</TabContent>

			<TabContent active={activeTab === 2}>
				<CalendarComponent src="/images/calender-div-2-s19.png" />
			</TabContent>

			<TabContent active={activeTab === 3}>
				<CalendarComponent src="/images/calender-div-3-s19.png" />
			</TabContent>

			{/* <TabContent active={activeTab === 4}>
				<CalendarComponent src="/images/calender-div-4-s17.png" />
			</TabContent> */}
		</section>
	);
};

export default Calendar;
