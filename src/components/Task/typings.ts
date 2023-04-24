// Статус задачи (0 в очереди; 1 в работе; 2 выполнено)
export enum Status {
  inQueue = 0,
  inWork = 1,
  Done = 2,
}

// Приоритет задачи (0 низкий|1 средний|2 высокий)
export enum Priority {
  low = 0,
  medium = 1,
  high = 2,
}

export interface Task {
  id: string;
  status: Status;
  priority: Priority;
  title: string;
  description: string;
  schedule: { creation_time: string };
  author_name: string;
}

export interface TaskInput {
  priority: Priority;
  title: string;
  description: string;
  author_name: string;
}
