import React, { FC } from "react";
import { ConfigProvider as AntdConfigProvider } from "antd";

import antdConfig from "./antd";
import { AuthProvider } from "./auth";
import Router from "./router";

const Provider: FC<{ children }> = ({ children }) => {
  return (
    <Router>
      <AuthProvider>
        <AntdConfigProvider {...antdConfig}>{children}</AntdConfigProvider>
      </AuthProvider>
    </Router>
  );
};

export default Provider;
