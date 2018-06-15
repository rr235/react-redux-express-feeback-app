import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title', id: 'title' },
  { label: 'Subject Line', name: 'subject', id: 'subject' },
  { label: 'Email Body', name: 'body', id: 'body' },
  { label: 'Recipient List', name: 'emails', id: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map((field, index) => (
      <Field {...field} component={SurveyField} key={index} />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
