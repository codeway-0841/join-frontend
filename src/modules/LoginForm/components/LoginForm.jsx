import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Login to your account</h2>
        <p>Please login to your account</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validateField("email", touched, errors)}
            help={!touched.email ? "" : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField("password", touched, errors)}
            help={!touched.password ? "" : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Error!</span>}
            <Button onClick={handleSubmit} type="primary" size="large">
            Log in
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
          Register now
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
