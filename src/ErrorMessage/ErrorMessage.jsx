import React from 'react';
import './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <div className="ErrorMessage">{message}</div>;
};

export default ErrorMessage;
