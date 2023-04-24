import React, { FC } from "react";
import { Button, Form as AntdForm, Input } from "antd";
import EyeInvisibleOutlined from "@ant-design/icons/lib/icons/EyeInvisibleOutlined";
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined";

import { LoginParams } from "./typings";

interface SignInFormProps {
  onSignIn: (data: LoginParams) => void;
  loading: boolean;
}

const SignInForm: FC<SignInFormProps> = ({ onSignIn, loading }) => {
  const [form] = AntdForm.useForm<LoginParams>();

  const onSubmitCapture = () => {
    form.validateFields().then((isValid) => {
      if (isValid) {
        const values: LoginParams = form.getFieldsValue();
        onSignIn(values);
      }
    });
  };

  return (
    <AntdForm form={form} layout="vertical" onSubmitCapture={onSubmitCapture}>
      <AntdForm.Item name="login" label={"Login"} rules={[{ required: true }]}>
        <Input />
      </AntdForm.Item>

      <AntdForm.Item name="password" label={"Password"} rules={[{ required: true }]}>
        <Input.Password iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Log in
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};

export default SignInForm;
