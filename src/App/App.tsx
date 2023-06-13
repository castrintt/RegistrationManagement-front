import { Fragment } from "react";
import RoutesApp from "./Routes/RoutesApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <ToastContainer />
      <RoutesApp />
    </Fragment>
  );
};

export default App;
