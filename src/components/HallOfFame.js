import { hofConfig } from "../data";
import SectionTitle from "./SectionTitle";

const HallOfFame = () => {
  return (
    <section className="section" id="hallOfFame">
      <SectionTitle>Hall of Fame</SectionTitle>
      <div className="fameFlex">
        {hofConfig.map((seasonNum) => {
          const { id, season, src } = seasonNum;
          return (
            <div className="flexDiv">
              <div className="seasonHall" key={id}>
                <h2>Season {season}</h2>
                <img src={src} alt={`Season ${season} Champions`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HallOfFame;
