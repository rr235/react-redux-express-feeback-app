import React from 'react';

export default ({ input, label, id, meta: { error, touched } }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input {...input} id={id} style={{ marginBottom: '5px' }} />
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
);
