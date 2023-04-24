import React, { FC } from "react";
import { Spin } from "antd";

import styles from "./styles.module.less";

interface CenterSpinProps {
  size?: "small" | "large" | "default";
  spinning?: boolean;
}

const CenterSpin: FC<CenterSpinProps> = ({ children, size, spinning }) => {
  return (
    <div className={styles.center}>
      <Spin size={size ?? "large"} spinning={spinning} className={styles.spin}>
        {children}
      </Spin>
    </div>
  );
};

export default CenterSpin;
