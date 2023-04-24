import React, { FC } from "react";
import { Select } from "antd";

import { Priority } from "./typings";

const { Option } = Select;

interface PrioritySelectboxProps {
  value?: number | null;
  onChange?: (key: number | null) => void;
}

const PrioritySelectbox: FC<PrioritySelectboxProps> = ({ value, onChange }) => {
  return (
    <Select allowClear autoClearSearchValue style={{ width: "100%" }} onChange={onChange} value={value}>
      {[Priority.low, Priority.medium, Priority.high].map((key) => (
        <Option key={key} value={key}>
          {Priority[key]}
        </Option>
      ))}
    </Select>
  );
};
export default PrioritySelectbox;
