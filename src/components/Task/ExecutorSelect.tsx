import React, { FC } from "react";
import { Select } from "antd";

const { Option } = Select;

interface ExecutorSelectboxProps {
  value?: string | null;
  onChange?: (key: string | null) => void;
}

const ExecutorSelectbox: FC<ExecutorSelectboxProps> = ({ value, onChange }) => {
  return (
    <Select allowClear autoClearSearchValue style={{ width: "100%" }} onChange={onChange} value={value}>
      {authors.map((executor) => (
        <Option key={executor.id} value={executor.author_name}>
          {executor.author_name}
        </Option>
      ))}
    </Select>
  );
};
export default ExecutorSelectbox;

interface Executor {
  id: string;
  author_name: string;
}

const authors: Executor[] = [
  {
    id: "001",
    author_name: "John Smith",
  },
  {
    id: "002",
    author_name: "Sarah Lee",
  },
  {
    id: "003",
    author_name: "James Wilson",
  },
  {
    id: "004",
    author_name: "David Taylor",
  },
  {
    id: "005",
    author_name: "Emma Anderson",
  },
  {
    id: "006",
    author_name: "Ryan Garcia",
  },
];
