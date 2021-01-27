import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  /* outline: none;
  border: none; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: 1px solid;
  border-color: ${({ primary }) => (primary ? "#01BF71" : "#010606")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    border: 1px #010606 solid;
  }
`;

export const FloatingButton = styled.div`
  background: ${({ primary }) => (primary ? "#01BF71" : "#01BF71")};
  border-radius: 50px;
  position: fixed;
  white-space: nowrap;
  bottom: 30px;
  right: 50px;
  /* border: none;
  outline: none; */
  color: #fcfcfc;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  z-index: 20;
  width: ${({ xl }) => (xl ? "30px" : "70px")};
  height: ${({ xl }) => (xl ? "30px" : "70px")};
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
