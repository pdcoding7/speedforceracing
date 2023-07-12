import styled from "styled-components";
import CheckeredDivider from "./CheckeredDivider";

const StyledSectionTitle = styled.div`
  margin: auto;
  text-align: center;
  padding: 0.5rem;
`;

const SectionTitle = ({ sectionTitle }) => {
  return (
    <div className="sectionDiv">
      <CheckeredDivider />
      <StyledSectionTitle>
        <h2 className="sectionHeader">{sectionTitle}</h2>
      </StyledSectionTitle>
      <CheckeredDivider />
    </div>
  );
};

export default SectionTitle;
