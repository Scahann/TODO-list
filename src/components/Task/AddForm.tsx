import React, { FC } from "react";
import { Button, Form as AntdForm, Input } from "antd";

import ExecutorSelectbox from "./ExecutorSelect";
import PrioritySelectbox from "./PrioritySelect";
import { TaskInput } from "./typings";

interface AddTaskProps {
  onAdd: (data: TaskInput) => void;
}

const AddTaskForm: FC<AddTaskProps> = ({ onAdd }) => {
  const [form] = AntdForm.useForm<TaskInput>();

  const onSubmitCapture = () => {
    form.validateFields().then((isValid) => {
      if (isValid) {
        const values: TaskInput = form.getFieldsValue();
        onAdd(values);
      }
    });
  };

  return (
    <AntdForm form={form} layout="vertical" onSubmitCapture={onSubmitCapture}>
      <AntdForm.Item name="title" label={"Title"} rules={[{ required: true }]}>
        <Input />
      </AntdForm.Item>

      <AntdForm.Item name="description" label={"Description"} rules={[{ required: true }]}>
        <Input.TextArea />
      </AntdForm.Item>

      <AntdForm.Item name="priority" label={"Priority"} rules={[{ required: true }]}>
        <PrioritySelectbox />
      </AntdForm.Item>

      <AntdForm.Item name="author_name" label={"Executor"} rules={[{ required: true }]}>
        <ExecutorSelectbox />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button type="primary" htmlType="submit">
          Add task
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};

export default AddTaskForm;
