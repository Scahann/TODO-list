import React, { FC } from "react";
import { Button, Typography } from "antd";

import styles from "./styles.module.less";

const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <Typography className={styles.centeredText}>Not found</Typography>
      <Button type="primary" onClick={() => window.history.back()}>
        Back
      </Button>
    </div>
  );
};

export default NotFound;
