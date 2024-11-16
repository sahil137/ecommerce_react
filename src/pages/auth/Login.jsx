import React from "react";
import { Button, Form, Input, Card } from "antd";

const Login = () => {
  const { Item, useForm } = Form;
  const { Password } = Input;
  const [form] = useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card
      title="Log In"
      size="default"
      className="w-1/3"
      styles={{
        header: {
          textAlign: "center",
          fontSize: "32px",
        },
      }}
    >
      <Form
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Item
          label="Email"
          name="email"
          labelCol={{
            span: 5,
          }}
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Item>

        <Item
          label="Password"
          name="password"
          labelCol={{
            span: 5,
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Password />
        </Item>

        <Item label={null} style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </Card>
  );
};

export default Login;
