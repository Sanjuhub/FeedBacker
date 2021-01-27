import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  height: 100vh;
  background: #112d42;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: #03a9f4;
  }
`;

export const SurveyFormContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 50px;
  height: 100vh;
  position: absolute;
  min-height: 1000px;
  min-width: 550px;
  z-index: 1000; */
  position: absolute;
  padding: 50px 50px;
  background: #fff;
  width: calc(80% - 150px);
  min-height: 70%;
  margin-top: 4rem;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
`;

export const SurveyFormH2 = styled.h2`
  color: #0f3959;
  font-size: 24px;
  font-weight: 500;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
`;

export const SurveyInputField = styled.div`
  position: relative;
  margin: 15px 0 15px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  border: none;
  border-bottom: 1px solid #777;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px 0 40px;
`;

export const SurveyFormReviewContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #112d42;
  flex-direction: column;
  color: #fff;
`;
