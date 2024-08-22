import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin} from "antd";
import Typography from "antd/es/typography/Typography";
import { Link } from "react-router-dom";
import registerImage from '../assests/create.jpg';
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser} = useSignup();
  const handleRegiter = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* from */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogon">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegiter} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required:true,
                  message:'Please input your full name!',
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required:true,
                  message:'Please input your Email!',
                },
                {
                  type: 'email',
                  message: 'The input is not valid Email!',
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required:true,
                  message:'Please input your Password!',
                },
       
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required:true,
                  message:'Please input your Confirm Password!',
                },
       
              ]}
            >
              <Input.Password size="large" placeholder="Re-Enter your password" />
            </Form.Item>

            
              {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
                />
            )}
            
            

            <Form.Item>
                <Button 
                  type={`${loading ? '' : 'primary'}`}
                  htmlType="submit"
                  size="large"
                  className="btn"
                  >
                    {loading ? <Spin /> : 'Create Account'}
                </Button>
            </Form.Item>

            <Form.Item>
              <Link to ="login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>

            </Form.Item>
          </Form>
        </Flex>
        

        {/* Image */}
        <Flex flex={1}>
          <img src={registerImage} className='auth-Image'/>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
