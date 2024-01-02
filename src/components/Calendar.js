import CalendarComponent from "./CalendarComponent";
import SectionTitle from "./SectionTitle";

const Calendar = () => {
	return (
		<section className="section" id="calendar">
			<SectionTitle sectionTitle="Race Calendar"></SectionTitle>
			<CalendarComponent src="/images/s14-calender-div-1-s15.png" />
			<CalendarComponent src="/images/s14-calender-div-2-s15.png" />
		</section>
	);
};

export default Calendar;
