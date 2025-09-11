import React from 'react';

const Tag = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex border border-yellow-400 gap-2 text-yellow-400 px-3 py-1 rounded-full uppercase items-center  ${className}`}> <span>&#10038;</span>
      {children}
    </span>
  );
};

export default Tag;
