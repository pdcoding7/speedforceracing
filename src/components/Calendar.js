import CalendarComponent from "./CalendarComponent";
import SectionTitle from "./SectionTitle";
import Tabs from "./Tabs";

const Calendar = () => {
	return (
		<section className="section" id="calendar">
			<SectionTitle sectionTitle="Race Calendar"></SectionTitle>

			<img className="welcomeImage" src="/images/f1-24-welcome.png" alt="Season Welcome"></img>

			<Tabs
				tabs={[
					{
						id: 1,
						tabTitle: "Division 1",
						content: <CalendarComponent src="/images/s14-calender-div-1-s15.png" />,
					},
					{
						id: 2,
						tabTitle: "Division 2",
						content: <CalendarComponent src="/images/s14-calender-div-2-s15.png" />,
					},
				]}
			/>
		</section>
	);
};

export default Calendar;
