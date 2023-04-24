import React, { FC } from "react";
import { Select } from "antd";

import { Status } from "./typings";

const { Option } = Select;

interface StatusSelectboxProps {
  value?: number | null;
  onChange?: (key: number | null) => void;
}

const StatusSelectbox: FC<StatusSelectboxProps> = ({ value, onChange }) => {
  return (
    <Select allowClear autoClearSearchValue style={{ width: "100%" }} onChange={onChange} value={value}>
      {[Status.inQueue, Status.inWork, Status.Done].map((key) => (
        <Option key={key} value={key}>
          {Status[key]}
        </Option>
      ))}
    </Select>
  );
};
export default StatusSelectbox;
