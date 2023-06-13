import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  const milliseconds = 1000;
  const closeTimeInSeconds = 4 * milliseconds;

  return (
    <ToastContainer
      position="top-right"
      autoClose={closeTimeInSeconds}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toast;
