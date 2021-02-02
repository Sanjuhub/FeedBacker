import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import {
  SurveyFormContainer,
  Form,
  Section,
  SurveyFormH2,
  SurveyInputField,
  ButtonContainer,
} from "./SurveyElement";
import SurveyField from "./SurveyField";
import { Button } from "../SharedElement";
import validateEmails from "../../utilities/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <SurveyInputField key={name}>
          <Field
            component={SurveyField}
            type="text"
            label={label}
            name={name}
          />
        </SurveyInputField>
      );
    });
  }

  render() {
    return (
      <Section>
        <SurveyFormContainer>
          <SurveyFormH2>Create your Survey</SurveyFormH2>
          <Form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <ButtonContainer>
              <Link to="/surveys">
                <Button type="submit">Cancel</Button>
              </Link>
              <Button type="submit">Next</Button>
            </ButtonContainer>
          </Form>
        </SurveyFormContainer>
      </Section>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.recipients || "");

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  // if (!values.title) {
  //   errors.title = "You must provide a title.";
  // }

  // if (!values.subject) {
  //   errors.subject = "You must provide a subject.";
  // }

  // if (!values.subject) {
  //   errors.subject = "You must provide a email body.";
  // }

  // if (!values.emails) {
  //   errors.emails = "You must provide a email.";
  // }
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
