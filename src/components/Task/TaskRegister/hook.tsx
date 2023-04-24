import { useCallback, useState } from "react";
import moment from "moment";

import { Status, Task, TaskInput } from "../typings";

interface TaskListState {
  tasks: Task[];
  addTask: (data: TaskInput) => void;
  changeTask: (taskId: string, taskInput: Partial<TaskInput>) => void;
  removeTask: (taskId: string) => void;
}

export const useTaskList = (userToken: string): TaskListState => {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem(getTasksId(userToken))) ?? initialTasks);

  const addTask = useCallback(
    (data: TaskInput) => {
      const date = moment(moment.now()).toDate().toISOString();

      const newTask: Task = {
        ...data,
        id: (tasks.length + 1).toString(),
        status: Status.inQueue,
        schedule: {
          creation_time: date,
        },
      };
      const newTasks = [...tasks, newTask];

      setTasks(newTasks);
      localStorage.setItem(getTasksId(userToken), JSON.stringify(newTasks));
    },
    [tasks, userToken],
  );

  const changeTask = useCallback(
    (taskId: string, taskInput: TaskInput) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            ...taskInput,
          };
        } else {
          return task;
        }
      });
      setTasks(newTasks);
      localStorage.setItem(getTasksId(userToken), JSON.stringify(newTasks));
    },
    [tasks, userToken],
  );

  const removeTask = useCallback(
    (taskId: string) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
      localStorage.setItem(getTasksId(userToken), JSON.stringify(newTasks));
    },
    [tasks, userToken],
  );

  return {
    tasks,
    addTask,
    changeTask,
    removeTask,
  };
};

const getTasksId = (userToken: string) => {
  return `${userToken}_tasks`;
};

const initialTasks: Task[] = [
  {
    id: "001",
    status: 0,
    priority: 2,
    title: "Develop website homepage",
    description: "Create a visually appealing and responsive homepage for the website",
    schedule: {
      creation_time: "2021-07-23T10:00:00",
    },
    author_name: "John Smith",
  },
  {
    id: "002",
    status: 1,
    priority: 1,
    title: "Implement user authentication",
    description: "Add user authentication feature to the website",
    schedule: {
      creation_time: "2021-07-24T14:30:00",
    },
    author_name: "Sarah Lee",
  },
  {
    id: "003",
    status: 2,
    priority: 0,
    title: "Fix CSS issues on mobile devices",
    description: "Resolve CSS issues on the website for mobile devices",
    schedule: {
      creation_time: "2021-07-25T11:15:00",
    },
    author_name: "John Smith",
  },
  {
    id: "004",
    status: 0,
    priority: 1,
    title: "Add search functionality",
    description: "Implement search feature on the website",
    schedule: {
      creation_time: "2021-07-26T09:00:00",
    },
    author_name: "John Smith",
  },
  {
    id: "005",
    status: 1,
    priority: 2,
    title: "Optimize website performance",
    description: "Improve website loading speed and overall performance",
    schedule: {
      creation_time: "2021-07-27T16:45:00",
    },
    author_name: "James Wilson",
  },
  {
    id: "006",
    status: 2,
    priority: 0,
    title: "Fix broken links on the website",
    description: "Identify and fix broken links on the website",
    schedule: {
      creation_time: "2021-07-28T13:20:00",
    },
    author_name: "Sarah Lee",
  },
  {
    id: "007",
    status: 0,
    priority: 1,
    title: "Create product page",
    description: "Design and develop a product page for the website",
    schedule: {
      creation_time: "2021-07-29T10:30:00",
    },
    author_name: "David Taylor",
  },
  {
    id: "008",
    status: 1,
    priority: 2,
    title: "Implement payment gateway",
    description: "Add payment gateway to the website for online transactions",
    schedule: {
      creation_time: "2021-07-30T14:00:00",
    },
    author_name: "Emma Anderson",
  },
  {
    id: "009",
    status: 2,
    priority: 0,
    title: "Translate website content",
    description: "Translate website content to multiple languages",
    schedule: {
      creation_time: "2021-07-31T11:45:00",
    },
    author_name: "Ryan Garcia",
  },
  {
    id: "010",
    status: 0,
    priority: 1,
    title: "Design email templates",
    description: "Create visually appealing email templates for the website",
    schedule: {
      creation_time: "2021-08-01T09:15:00",
    },
    author_name: "Emma Anderson",
  },
];
