import React from "react";
import { ToastContainer } from "react-toastify";
import { UseToastController } from "./Toast.controller";

const Toast = () => {
  const { States } = UseToastController();
  return (
    <ToastContainer
      position="top-right"
      autoClose={States.closeTimeInSeconds}
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
