const IntroComponent = (props) => {
	return (
		<div className="fameFlex">
			<div className="flexDiv">
				<div className="calendarImg">
					<img src={props.src} alt="Season 21" />
				</div>
			</div>
		</div>
	);
};

export default IntroComponent;
