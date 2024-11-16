import React, { useState } from "react";
import { Button, Form, Input, Card } from "antd";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {
  confirmPasswordRules,
  passwordRules,
} from "../../utils/formFieldRules";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { Item, useForm } = Form;
  const { Password } = Input;
  const [form] = useForm();

  const handleFormSubmit = async (values) => {
    try {
      const { email, password } = values;
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Sign up Successful!");
      navigate("/");
    } catch (error) {
      console.log("Error in Sign up", error);
      toast.error(`Error in Sign up: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card
      title="Sign Up"
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

        <Item
          label="Confirm Password"
          name="confirm"
          validateTrigger="submit"
          rules={confirmPasswordRules}
        >
          <Password placeholder="Confirm your password (min. 8 chars)" />
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

export default Register;
