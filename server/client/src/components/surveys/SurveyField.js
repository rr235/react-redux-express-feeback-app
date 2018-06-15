import React from 'react';

export default ({ input, label, id }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input {...input} id={id} />
  </div>
);
