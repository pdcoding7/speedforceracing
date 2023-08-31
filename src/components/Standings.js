import SectionTitle from "./SectionTitle.js";
import { standingsConfig } from "../data";
import { raceResultsDiv2 } from "../data";
import { constructorsGraphic } from "../data";
import { raceResultsDiv1 } from "../data";
import { constructorsGraphicGp1 } from "../data";
import { standingsGP2Config } from "../data";
import DivisionTitle from "./DivisionTitle.js";

const Standings = () => {
	return (
		<section className="section" id="standings">
			<div id="gp1Standings">
				<SectionTitle sectionTitle="Standings"></SectionTitle>
				<DivisionTitle division="Div 1" typeOf="- Race Result" />
				<div className="fameFlex">
					{raceResultsDiv1.map((seasonNum) => {
						const { id, season, src } = seasonNum;
						return (
							<div className="flexDiv">
								<div className="standingsImg" key={id}>
									<img src={src} alt={`Season ${season}`} />
								</div>
							</div>
						);
					})}
				</div>

				<DivisionTitle division="Div 1" typeOf="- Driver Standings" />
				<table>
					<tr>
						<th className="positionCol">
							<h4>Pos</h4>
						</th>
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
				<div className="fameFlex">
					{constructorsGraphicGp1.map((seasonNum) => {
						const { id, season, src } = seasonNum;
						return (
							<div className="flexDiv">
								<div className="constructorsImg" key={id}>
									<img src={src} alt={`Season ${season}`} />
								</div>
							</div>
						);
					})}
				</div>

				{/* <table className="constructors">
          <tr>
            <th className="positionCol">
              <h4>Pos</h4>
            </th>
            <th className="teamCol">
              <h4>Team</h4>
            </th>
            <th className="columnHide">
              <h4>1st</h4>
            </th>
            <th className="columnHide">
              <h4>2nd</h4>
            </th>
            <th className="columnHide">
              <h4>3rd</h4>
            </th>
            <th className="columnHide">
              <h4>FL</h4>
            </th>
            <th>
              <h4>Points</h4>
            </th>
          </tr>
          {constructorsConfig.map((constructors) => {
            const {
              id,
              position,
              team,
              teamBadge,
              wins,
              second,
              third,
              fastest,
              points,
            } = constructors;
            return (
              <tr key={id}>
                <td>
                  <p>{position}</p>
                </td>
                <td>
                  <div className="flexBox">
                    <h5>{team}</h5>
                    <div class="teamImg">
                      <img src={teamBadge} alt="" />
                    </div>
                  </div>
                </td>
                <td className="columnHide">{wins}</td>
                <td className="columnHide">{second}</td>
                <td className="columnHide">{third}</td>
                <td className="fastestCol columnHide">{fastest}</td>
                <td>{points}</td>
              </tr>
            );
          })}
        </table> */}
			</div>
			<div id="gp2Standings">
				<DivisionTitle division="Div 2" typeOf="- Race Result" />
				<div className="fameFlex">
					{raceResultsDiv2.map((seasonNum) => {
						const { id, season, src } = seasonNum;
						return (
							<div className="flexDiv">
								<div className="standingsImg" key={id}>
									<img src={src} alt={`Season ${season}`} />
								</div>
							</div>
						);
					})}
				</div>
				<DivisionTitle division="Div 2" typeOf="- Driver Standings" />
				<table>
					<tr>
						<th className="positionCol">
							<h4>Pos</h4>
						</th>
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
				<div className="fameFlex">
					{constructorsGraphic.map((seasonNum) => {
						const { id, season, src } = seasonNum;
						return (
							<div className="flexDiv">
								<div className="constructorsImg" key={id}>
									<img src={src} alt={`Season ${season}`} />
								</div>
							</div>
						);
					})}
				</div>

				{/* <table className="constructors">
          <tr>
            <th className="positionCol">
              <h4>Pos</h4>
            </th>
            <th className="teamCol">
              <h4>Team</h4>
            </th>
            <th className="columnHide">
              <h4>1st</h4>
            </th>
            <th className="columnHide">
              <h4>2nd</h4>
            </th>
            <th className="columnHide">
              <h4>3rd</h4>
            </th>
            <th className="columnHide">
              <h4>FL</h4>
            </th>
            <th>
              <h4>Points</h4>
            </th>
          </tr>
          {constructorsGP2Config.map((constructors) => {
            const {
              id,
              position,
              team,
              teamBadge,
              wins,
              second,
              third,
              fastest,
              points,
            } = constructors;
            return (
              <tr key={id}>
                <td>
                  <p>{position}</p>
                </td>
                <td>
                  <div className="flexBox">
                    <h5>{team}</h5>
                    <div class="teamImg">
                      <img src={teamBadge} alt="" />
                    </div>
                  </div>
                </td>
                <td className="columnHide">{wins}</td>
                <td className="columnHide">{second}</td>
                <td className="columnHide">{third}</td>
                <td className="fastestCol columnHide">{fastest}</td>
                <td>{points}</td>
              </tr>
            );
          })}
        </table> */}
			</div>
		</section>
	);
};

export default Standings;
