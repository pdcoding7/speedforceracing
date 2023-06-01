import styled from "styled-components";

const CheckeredDivider = styled.div`
  background: repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%) 50% /
    20px 20px;
  height: 1rem;
  width: 20%;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export default CheckeredDivider;
