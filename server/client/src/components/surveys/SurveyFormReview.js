import React from 'react';

export default ({ onCancel }) => (
  <div>
    <h3>Please confirm your entries.</h3>
    <button className="yellow darken-3 btn-flat" onClick={onCancel}>
      Back
    </button>
  </div>
);
