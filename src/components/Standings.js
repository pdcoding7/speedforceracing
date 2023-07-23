import SectionTitle from "./SectionTitle.js";
import { standingsConfig } from "../data";
import { raceResults } from "../data";
import { constructorsConfig } from "../data";
import { standingsGP2Config } from "../data";
import { constructorsGP2Config } from "../data";
import DivisionTitle from "./DivisionTitle.js";

const Standings = () => {
  return (
    <section className="section" id="standings">
      <div id="gp1Standings">
        <SectionTitle sectionTitle="Standings"></SectionTitle>
        <DivisionTitle division="GP2" typeOf="" />
        <div className="fameFlex">
          {raceResults.map((seasonNum) => {
            const { id, season, src } = seasonNum;
            return (
              <div className="flexDiv">
                <div className="standingsImg" key={id}>
                  <img src={src} alt={`Season ${season} Race Results`} />
                </div>
              </div>
            );
          })}
        </div>
        {/* <table>
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
          {standingsConfig.map((standings) => {
            const {
              id,
              position,
              name,
              team,
              teamBadge,
              wins,
              second,
              third,
              fastest,
              points,
            } = standings;
            return (
              <tr key={id} className="indivTable">
                <td>
                  <p>{position}</p>
                </td>
                <td>{name}</td>
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
        {/* <table>
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
          {standingsGP2Config.map((standings) => {
            const {
              id,
              position,
              name,
              team,
              teamBadge,
              wins,
              second,
              third,
              fastest,
              points,
            } = standings;
            return (
              <tr key={id} className="indivTable">
                <td>
                  <p>{position}</p>
                </td>
                <td>{name}</td>
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
