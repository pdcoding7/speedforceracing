import CalendarComponent from "./CalendarComponent";
import SectionTitle from "./SectionTitle";
import Tabs from "./Tabs";

const Calendar = () => {
	return (
		<section className="section" id="calendar">
			<SectionTitle sectionTitle="Race Calendar"></SectionTitle>

			<Tabs
				tabs={[
					{
						id: 1,
						tabTitle: "Div 1",
						content: <CalendarComponent src="/images/calender-div-1-s16.png" />,
					},
					{
						id: 2,
						tabTitle: "Div 2",
						content: <CalendarComponent src="/images/calender-div-2-s16.png" />,
					},
					{
						id: 3,
						tabTitle: "Div 3",
						content: <CalendarComponent src="/images/calender-div-3-s16.png" />,
					},
				]}
			/>
		</section>
	);
};

export default Calendar;
