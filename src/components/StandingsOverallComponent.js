import { constructorsAllConfig } from "../data";

const StandingsOverallComponent = () => {
	return (
		<div id="crossDivStandings">
			<table className="constructors">
				<tr>
					<th className="positionCol"></th>
					<th className="teamCol">
						<h4>Team</h4>
					</th>
					<th className="blankCol columnHide"></th>
					<th>
						<h4>Div 1</h4>
					</th>
					<th>
						<h4>Div 2</h4>
					</th>
					<th>
						<h4>Div 3</h4>
					</th>
					<th>
						<h4>Total</h4>
					</th>
				</tr>
				{constructorsAllConfig.map((constructors) => {
					const { id, position, teamBadge, team, div1, div2, div3 } = constructors;
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
							<td>{div1}</td>
							<td>{div2}</td>
							<td>{div3}</td>
							<td className="combinedTotal">{Number(div1) + Number(div2) + Number(div3)}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default StandingsOverallComponent;
