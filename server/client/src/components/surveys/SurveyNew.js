import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    return this.state.showFormReview ? (
      <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    ) : (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// reduxForm is used to clear all the field values on load.
// this is done by using the same form name (and destroyOnUnmount which is true bt default).
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
