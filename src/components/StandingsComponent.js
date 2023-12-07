import { mergedStandingsConfig } from "../data";

const StandingsComponent = (props) => {
	return (
		<table>
			<tr>
				<th className="positionCol"></th>
				<th className="driverList">
					<h4>Driver</h4>
				</th>
				<th className="teamCol">
					<h4>Team</h4>
				</th>
				<th className="columnHide">
					<h4>1st</h4>
				</th>
				<th className="columnHide">
					<h4>Pod</h4>
				</th>
				<th className="columnHide">
					<h4>FL</h4>
				</th>
				<th>
					<h4>Points</h4>
				</th>
			</tr>
			{mergedStandingsConfig
				.filter((driver) => driver.league === props.league)
				.map((standings) => {
					const { id, position, name, teamBadge, wins, podiums, fastest, points } = standings;
					return (
						<tr key={id} className="indivTable">
							<td>
								<p>{position}</p>
							</td>
							<td>{name}</td>
							<td>
								<div className="flexBox">
									<div class="teamImg">
										<img src={teamBadge} alt="" />
									</div>
								</div>
							</td>
							<td className="columnHide">{wins}</td>
							<td className="columnHide">{podiums}</td>
							<td className="fastestCol columnHide">{fastest}</td>
							<td>{points}</td>
						</tr>
					);
				})}
		</table>
	);
};

export default StandingsComponent;
