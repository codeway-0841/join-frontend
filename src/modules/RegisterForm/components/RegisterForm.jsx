import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const success = false;

const RegisterForm = props => {
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
        <h2>Registration</h2>
        <p>To enter the chat, you need to register</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={validateField("email", touched, errors)}
              help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="E-Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password", touched, errors)}
              help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input
                id="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password", touched, errors)}
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="password2"
                placeholder="Confirm password"
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Error!</span>}
              <Button onClick={handleSubmit} type="primary" size="large">
                Registration
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
             Log in
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <Icon type="info-circle" theme="twoTone" />
            </div>
            <h2>Verify your account</h2>
            <p>
            A letter with a confirmation link has been sent to your mail
               account.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
