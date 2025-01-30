import React from 'react';
import './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className="LoadMoreBtn" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;