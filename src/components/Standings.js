import { standingsConfig, standingsGP2Config, constructorsConfig, constructorsGP2Config, constructorsAllConfig } from "../data";
import SectionTitle from "./SectionTitle.js";
import DivisionTitle from "./DivisionTitle.js";

const Standings = () => {
	return (
		<section className="section" id="standings">
			<div id="gp1Standings">
				<SectionTitle sectionTitle="Standings"></SectionTitle>

				<DivisionTitle division="Div 1" typeOf="- Driver Standings" />
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
					{standingsConfig.map((standings) => {
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

				<DivisionTitle division="Div 1" typeOf="- Constructors Championship" />
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
					{constructorsConfig.map((constructors) => {
						const { id, position, teamBadge, team, wins, points } = constructors;
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
			</div>
			<div id="gp2Standings">
				<DivisionTitle division="Div 2" typeOf="- Driver Standings" />
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
					{standingsGP2Config.map((standings) => {
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

				<DivisionTitle division="Div 2" typeOf="Constructors Championship" />
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
					{constructorsGP2Config.map((constructors) => {
						const { id, position, teamBadge, team, wins, points } = constructors;
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
			</div>

			{/* <div id="rpStandings">
				<DivisionTitle division="RP" typeOf="- Driver Standings" />
				<table>
					<tr>
						<th className="positionCol"></th>
						<th className="driverList">
							<h4>Driver</h4>
						</th>
						<th>
							<h4>1st</h4>
						</th>
						<th className="columnHide">
							<h4>Pod</h4>
						</th>
						<th>
							<h4>FL</h4>
						</th>
						<th className="columnHide">
							<h4>Pole</h4>
						</th>
						<th>
							<h4>Points</h4>
						</th>
					</tr>
					{standingsRealisticConfig.map((standings) => {
						const { id, position, name, wins, podiums, fastest, pole, points } = standings;
						return (
							<tr key={id} className="indivTable">
								<td>
									<p>{position}</p>
								</td>
								<td>{name}</td>
								<td>{wins}</td>
								<td className="columnHide">{podiums}</td>
								<td className="fastestCol">{fastest}</td>
								<td className="poleCol columnHide">{pole}</td>
								<td>{points}</td>
							</tr>
						);
					})}
				</table>
			</div> */}

			<div id="crossDivStandings">
				<DivisionTitle division="Cross Div" typeOf="Constructors Championship" />
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
							<h4>Total</h4>
						</th>
					</tr>
					{constructorsAllConfig.map((constructors) => {
						const { id, position, teamBadge, team, div1, div2, totalPoints } = constructors;
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
								<td>{totalPoints}</td>
							</tr>
						);
					})}
				</table>
			</div>
		</section>
	);
};

export default Standings;
