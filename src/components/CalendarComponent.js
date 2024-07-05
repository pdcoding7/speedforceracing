const CalendarComponent = (props) => {
	return (
		<div className="fameFlex">
			<div className="flexDiv">
				<div className="calendarImg">
					<img src={props.src} alt="Season 16 Calendar" />
				</div>
			</div>
		</div>
	);
};

export default CalendarComponent;
