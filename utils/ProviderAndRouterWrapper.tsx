import { Provider } from "react-redux";
import store from "../src/App/Store/Store";
import { BrowserRouter as Router } from "react-router-dom";

type ProviderAndRouterWrapperProps = {
  children: JSX.Element;
};

const ProviderAndRouterWrapper = ({
  children,
}: ProviderAndRouterWrapperProps) => {
  return (
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  );
};

export default ProviderAndRouterWrapper;
