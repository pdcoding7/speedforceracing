import SectionTitle from "./SectionTitle";
import { streamConfig } from "../data";
import styled from "styled-components";
import DefaultButton from "./Button";

const StyledDiv = styled.div`
  text-align: center;
  margin: auto;
  width: 70%;
`;

const StyledDefaultButton = styled(DefaultButton)`
  background-color: #000;
  color: #fff;
`;

const PastStreams = () => {
  return (
    <section className="section" id="pastStreams">
      <SectionTitle sectionTitle="Past Streams"></SectionTitle>
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
      <StyledDiv>
        <a href="https://www.youtube.com/@SpeedForceRacing">
          <StyledDefaultButton>
            Visit our YouTube channel for more <i class="fab fa-youtube"></i>
          </StyledDefaultButton>
        </a>
      </StyledDiv>
    </section>
  );
};

export default PastStreams;
