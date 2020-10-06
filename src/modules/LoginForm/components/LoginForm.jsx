import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Block } from 'components';
import { validateFields } from "utils/helpers";

const LoginForm = (props) => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  const validateField = validateFields(errors, touched);

  return (
    <>
      <div className="auth__top">
        <h2>Водите в аккаунт</h2>
        <p>Пожалуйста, войдите в аккаунт</p>
      </div>
      <Block>
        <Form>
          <Form.Item hasFeedback
            validateStatus={validateField('email')}
            help={!touched.email ? null : errors.email}
          >
            <Input
              id="email"
              onBlur={handleBlur}
              onChange={handleChange}
              size="large"
              prefix={<UserOutlined />}
              placeholder="E-Mail" />
          </Form.Item>
          <Form.Item hasFeedback
            validateStatus={validateField('password')}
            help={!touched.password ? null : errors.password}
          >
            <Input.Password
              id="password"
              onBlur={handleBlur}
              onChange={handleChange}
              size="large"
              prefix={<LockOutlined />}
              placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <Button disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Войти
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/signup">Зарегистрироваться</Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
