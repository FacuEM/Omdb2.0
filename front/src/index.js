const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");

import store from "./store";
import Routes from "./containers/Routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
