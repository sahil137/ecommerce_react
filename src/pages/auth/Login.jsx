import React, { useState } from "react";
import { Button, Form, Input, Card } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { passwordRules } from "../../utils/formFieldRules";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { Item, useForm } = Form;
  const { Password } = Input;
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values) => {
    try {
      const { email, password } = values;
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toast.success("Logged in!");
    } catch (error) {
      console.log("Error in Login", error);
      toast.error("Error in Login. Please try again later");
    } finally {
      setLoading(false);
    }
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
        onFinish={handleFormSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Item
          label="Email"
          name="email"
          validateTrigger="submit"
          labelCol={{
            span: 5,
          }}
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Your email address" />
        </Item>

        <Item
          label="Password"
          name="password"
          validateTrigger="submit"
          rules={passwordRules}
        >
          <Password placeholder="Password (min. 8 chars)" />
        </Item>

        <Item label={null} style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Item>
      </Form>
    </Card>
  );
};

export default Login;
