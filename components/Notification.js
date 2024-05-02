// components/Notification.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return (
    <ToastContainer 
      position="top-center" 
      autoClose={3000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick
      rtl={false}
      theme="colored"
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const notify = (message, type = 'default') => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    default:
      toast(message);
  }
};

export default Notification;
