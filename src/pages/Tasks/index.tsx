import React, { FC } from "react";
import { Typography } from "antd";
import { Link } from "@curi/react-dom";

import TaskRegister from "../../components/Task/TaskRegister";
import useAuth from "../../providers/auth";
import { Pages } from "../../providers/router/routes";

import styles from "./styles.module.less";

export const TasksPage: FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Typography className={styles.centeredText}>
        Please,
        <Link name={Pages.Home}>login</Link> to start working
      </Typography>
    );
  }

  return <TaskRegister userToken={user.token} />;
};
