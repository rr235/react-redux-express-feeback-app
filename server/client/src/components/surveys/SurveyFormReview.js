import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields.json';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label htmlFor={`field-${name}`}>{label}</label>
      <div id={`field-${name}`}>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h3>Please confirm your entries.</h3>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
