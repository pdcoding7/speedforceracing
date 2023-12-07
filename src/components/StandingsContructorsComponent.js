import { mergedConstructorsConfig } from "../data";

const StandingsContructorsComponent = (props) => {
	return (
		<table className="constructors">
			<tr>
				<th className="positionCol"></th>
				<th className="teamCol">
					<h4>Team</h4>
				</th>
				<th className="blankCol columnHide"></th>
				<th>
					<h4>Wins</h4>
				</th>
				<th>
					<h4>Points</h4>
				</th>
			</tr>

			{mergedConstructorsConfig
				.filter((driver) => driver.league === props.league)
				.map((standings) => {
					const { id, position, teamBadge, team, wins, points } = standings;
					return (
						<tr key={id}>
							<td>
								<p>{position}</p>
							</td>
							<td>
								<div className="flexBox">
									<div class="teamImg">
										<img src={teamBadge} alt="" />
									</div>
								</div>
							</td>
							<td className="blankCol columnHide">
								<h3>{team}</h3>
							</td>
							<td>{wins}</td>
							<td>{points}</td>
						</tr>
					);
				})}
		</table>
	);
};

export default StandingsContructorsComponent;
