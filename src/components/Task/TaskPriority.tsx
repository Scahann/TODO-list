import React, { FC } from "react";
import classNames from "classnames";

import { Priority } from "./typings";

import styles from "./styles.module.less";

interface TaskPriorityProps {
  data: Priority;
}

export const TaskPriority: FC<TaskPriorityProps> = ({ data }) => {
  switch (data) {
    case Priority.low: {
      return <div className={classNames(styles.priority, styles.low)} title={"low priority"} />;
    }
    case Priority.medium: {
      return <div className={classNames(styles.priority, styles.medium)} title={"medium priority"} />;
    }
    case Priority.high: {
      return <div className={classNames(styles.priority, styles.high)} title={"high priority"} />;
    }
    default: {
      return null;
    }
  }
};
