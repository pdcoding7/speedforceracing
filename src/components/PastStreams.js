import SectionTitle from "./SectionTitle";
import { streamConfig } from "../data";

const PastStreams = () => {
  return (
    <section className="section" id="pastStreams">
      <SectionTitle>Past Streams</SectionTitle>
      {streamConfig.map((stream) => {
        const { id, title, src } = stream;
        return (
          <div className="flexDiv" key={id}>
            <h2>{title}</h2>
            <div className="videoContainer">
              <iframe src={src} title={title} allowFullScreen></iframe>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PastStreams;
