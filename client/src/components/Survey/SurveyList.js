import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map((survey) => {
      return (
        <div key={survey._id}>
          <div>
            <span>{survey.title}</span>
            <p>{survey.body}</p>
            <p>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
          </div>
          <div>
            <p>Yes: {survey.yes}</p>
            <p>No: {survey.no}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
