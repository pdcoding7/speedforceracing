import { raceCalendar } from "../data";
import SectionTitle from "./SectionTitle";

const Calendar = () => {
  return (
    <section className="section" id="calendar">
      <SectionTitle sectionTitle="Race Calendar"></SectionTitle>
      <div className="fameFlex">
        {raceCalendar.map((seasonNum) => {
          const { id, season, src } = seasonNum;
          return (
            <div className="flexDiv">
              <div className="calendarImg" key={id}>
                <img src={src} alt={`Season ${season} Calendar`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Calendar;
