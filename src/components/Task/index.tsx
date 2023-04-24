import React, { FC, useState } from "react";
import { Modal } from "antd";
import moment from "moment";

import EditTaskForm from "./EditForm";
import { TaskPriority } from "./TaskPriority";
import { Task as TaskData, TaskInput } from "./typings";

import styles from "./styles.module.less";

export interface TaskProps {
  data: TaskData;
  changeTask: (taskId: string, taskInput: Partial<TaskInput>) => void;
  removeTask: (taskId: string) => void;
}

const Task: FC<TaskProps> = ({ data, changeTask, removeTask }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className={styles.task} onClick={() => setShowModal(true)}>
        <div className={styles.header}>
          <TaskPriority data={data.priority} />
          {data.title}
        </div>
        <div className={styles.info}>
          <div className={styles.executor}>{data.author_name}</div>
          <div className={styles.date}>{moment(data.schedule.creation_time).format("HH:MM:SS DD.MM.YYYY")}</div>
        </div>
      </div>
      {showModal && (
        <Modal
          title={data.title}
          open={showModal}
          destroyOnClose={true}
          onCancel={() => setShowModal(false)}
          footer={[]}
        >
          <EditTaskForm
            onChange={(value) => {
              changeTask(data.id, value);
              setShowModal(false);
            }}
            onRemove={() => removeTask(data.id)}
            value={data}
          />
        </Modal>
      )}
    </>
  );
};

export default Task;
