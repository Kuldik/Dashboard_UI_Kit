import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ToastContainer />
      {children}
    </div>
  );
};

export default ToastWrapper;