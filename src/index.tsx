import React, { FC } from "react";
import ReactDOM from "react-dom";
import { useResponse } from "@curi/react-dom";

import Provider from "./providers";

import "antd/dist/antd.less";
import "./variables.less";

const container = document.getElementById("root");

const App: FC = () => {
  const { response } = useResponse();
  const { body: Body } = response;

  return <Body response={response} />;
};

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  container,
);
