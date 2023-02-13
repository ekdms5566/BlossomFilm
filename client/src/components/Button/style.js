import styled from "styled-components";

export const Button = styled.button`
  min-width: 250px;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 50px;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  &.on {
    background-color: #ff6581;
    color: #ffffff;
  }
  &.share {
    border: 2px solid #ff6581;
    color: #ff6581;
  }
`;
