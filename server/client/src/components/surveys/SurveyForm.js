import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    id: 'title',
    noValueError: 'You must provide a title.'
  },
  {
    label: 'Subject Line',
    name: 'subject',
    id: 'subject',
    noValueError: 'You must provide email subject.'
  },
  {
    label: 'Email Body',
    name: 'body',
    id: 'body',
    noValueError: 'You must provide email body.'
  },
  {
    label: 'Recipient List',
    name: 'emails',
    id: 'emails',
    noValueError: "You must provide recipients' emails."
  }
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
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  FIELDS.forEach(({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
