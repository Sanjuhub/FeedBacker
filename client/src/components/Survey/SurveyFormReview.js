import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { formValues } from "redux-form";
import { Button } from "../SharedElement";
import { SurveyFormReviewContainer } from "./SurveyElement";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
      <Button onClick={() => submitSurvey(formValues, history)}>
        Send Survey
      </Button>
    </SurveyFormReviewContainer>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
