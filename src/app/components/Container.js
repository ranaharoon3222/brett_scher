import React from 'react';

const Container = ({ className, children }) => {
  return (
    <div className={` mx-auto py-4 px-4 w-full max-w-[1280px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
