import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { formValues } from "redux-form";
import { Button } from "../SharedElement";
import { SurveyFormReviewContainer } from "./SurveyElement";
import formFields from "./formFields";
import * as action from "../../actions";

const SurveyReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <SurveyFormReviewContainer>
      <h5>Please confirm your entries.</h5>
      {reviewFields}
      <Button onClick={onCancel}>Back</Button>
      <Button onClick={() => action.submitSurvey(formValues)}>
        Send Survey
      </Button>
    </SurveyFormReviewContainer>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps)(SurveyReview);
