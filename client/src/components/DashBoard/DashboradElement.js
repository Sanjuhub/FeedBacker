import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BiChevronsRight } from "react-icons/bi";

export const DashboardContaier = styled.div`
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const Plus = styled(FiPlus)`
  /* margin-top: 10px; */
`;

export const DoubleRight = styled(BiChevronsRight)`
  /* margin-top: 10px; */
  /* margin-left: 5px; */
`;
