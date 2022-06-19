import React, { useState } from "react";
import { DatePicker, TimePicker, Select, Space } from "antd";

const { Option } = Select;

function PickerWithType({ type, onChange }) {
  if (type === "time") return <TimePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

function SwitchablePicker() {
  const [type, setType] = useState("time");
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
}

export default SwitchablePicker;
