import React, { FC, useState } from "react";
import { Button, Col, Layout, Modal, Row } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import ArrowDownOutlined from "@ant-design/icons/lib/icons/ArrowDownOutlined";
import ArrowUpOutlined from "@ant-design/icons/lib/icons/ArrowUpOutlined";
import moment from "moment";

import Auth from "../../../components/Auth";
import Task, { TaskProps } from "../../../components/Task";
import { Status, Task as TaskData } from "../../../components/Task/typings";
import AddTaskForm from "../AddForm";

import { useTaskList } from "./hook";

import styles from "./styles.module.less";

interface StatusColData {
  name: string;
  status: Status;
}

const statusCols: StatusColData[] = [
  {
    name: "In queue",
    status: Status.inQueue,
  },
  {
    name: "In work",
    status: Status.inWork,
  },
  {
    name: "Done",
    status: Status.Done,
  },
];

interface TaskRegisterProps {
  userToken: string;
}

const TaskRegister: FC<TaskRegisterProps> = ({ userToken }) => {
  const { tasks, addTask, changeTask, removeTask } = useTaskList(userToken);

  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  return (
    <>
      <Layout>
        <Header>
          <div className={styles.bar}>
            <Button type="primary" onClick={() => setShowAddTaskModal(true)}>
              Add new task
            </Button>
            <Auth />
          </div>
        </Header>
        <Content>
          <Row justify="space-between" className={styles.row}>
            {statusCols.map((statusCol) => (
              <StatusCol
                key={statusCol.status}
                data={statusCol}
                tasks={tasks}
                changeTask={changeTask}
                removeTask={removeTask}
              />
            ))}
          </Row>
        </Content>
      </Layout>
      {showAddTaskModal && (
        <Modal
          title={"Add task"}
          open={showAddTaskModal}
          destroyOnClose={true}
          onCancel={() => setShowAddTaskModal(false)}
          footer={[]}
        >
          <AddTaskForm
            onAdd={(data) => {
              addTask(data);
              setShowAddTaskModal(false);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default TaskRegister;

interface StatusColProps extends Pick<TaskProps, "changeTask" | "removeTask"> {
  data: StatusColData;
  tasks: TaskData[];
}

const StatusCol: FC<StatusColProps> = ({ data, changeTask, removeTask, tasks }) => {
  const [sortDesc, setSortDesc] = useState<boolean>(false);

  return (
    <Col className={styles.statusCol} span={7}>
      <div className={styles.header}>
        {data.name}
        <div className={styles.sort}>
          {sortDesc ? (
            <ArrowUpOutlined onClick={() => setSortDesc(false)} />
          ) : (
            <ArrowDownOutlined onClick={() => setSortDesc(true)} />
          )}
        </div>
      </div>
      <div className={styles.taskList}>
        {tasks
          .filter((task) => task.status === data.status)
          .sort((task1, task2) => {
            const task1CreationTime = moment(task1.schedule.creation_time).valueOf();
            const task2CreationTime = moment(task2.schedule.creation_time).valueOf();
            if (sortDesc) {
              return task1CreationTime - task2CreationTime;
            } else {
              return task2CreationTime - task1CreationTime;
            }
          })
          .map((task) => (
            <Task key={task.id} data={task} changeTask={changeTask} removeTask={removeTask} />
          ))}
      </div>
    </Col>
  );
};
