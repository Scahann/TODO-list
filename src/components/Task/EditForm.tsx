import React, { FC } from "react";
import { Button, Form as AntdForm, Space } from "antd";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";

import PrioritySelectbox from "./PrioritySelect";
import StatusSelectbox from "./StatusSelectbox";
import { Priority, Status, Task } from "./typings";

import styles from "./styles.module.less";

interface FormState {
  priority: Priority;
  status: Status;
}

interface EditTaskProps {
  value: Task;
  onChange: (data: FormState) => void;
  onRemove: () => void;
}

const EditTaskForm: FC<EditTaskProps> = ({ value, onChange, onRemove }) => {
  const [form] = AntdForm.useForm<FormState>();

  const onSubmitCapture = () => {
    form.validateFields().then((isValid) => {
      if (isValid) {
        const values: FormState = form.getFieldsValue();
        onChange(values);
      }
    });
  };

  return (
    <AntdForm
      form={form}
      layout="vertical"
      onSubmitCapture={onSubmitCapture}
      initialValues={{
        priority: value.priority,
        status: value.status,
      }}
    >
      <Space direction="vertical" className={styles.info}>
        <div className={styles.executor}>{value.author_name}</div>
        <div>{value.description}</div>
      </Space>
      <AntdForm.Item name="priority" label={"Priority"} rules={[{ required: true }]}>
        <PrioritySelectbox />
      </AntdForm.Item>

      <AntdForm.Item name="status" label={"Status"} rules={[{ required: true }]}>
        <StatusSelectbox />
      </AntdForm.Item>
      <Space>
        <AntdForm.Item>
          <Button onClick={onRemove} icon={<DeleteOutlined />}>
            Remove task
          </Button>
        </AntdForm.Item>
        <AntdForm.Item>
          <Button type="primary" htmlType="submit">
            Update task
          </Button>
        </AntdForm.Item>
      </Space>
    </AntdForm>
  );
};

export default EditTaskForm;
