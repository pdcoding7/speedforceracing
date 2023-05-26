import styled from "styled-components";

const DefaultButton = styled.button`
  padding: 0.9rem 1.6rem;
  font-size: 1.25rem;
  background: #fff;
  color: #000;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 32px;
  border-radius: 2rem;
  &:hover {
    box-shadow: 0 3px 3px pink;
    transition: all 0.5 ease-in-out;
  }
`;

export default DefaultButton;
