import React from 'react';
import { Link } from "react-router-dom";
import { Alert, Form, Input } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, InfoCircleTwoTone } from '@ant-design/icons';

import { Button, Block } from 'components';
import { validateFields } from "utils/helpers";

const RegisterForm = (props) => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status
  } = props;

  const validateField = validateFields(errors, touched);

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        <Form>
          <Form.Item hasFeedback
                     validateStatus={validateField('email')}
                     help={!touched.email ? null : errors.email}
          >
            <Input
              id="email"
              size="large"
              prefix={<MailOutlined/>}
              placeholder="Введите E-Mail"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item hasFeedback
                     validateStatus={validateField('username')}
                     help={!touched.username ? null : errors.username}
          >
            <Input
              id="fullName"
              size="large"
              prefix={<UserOutlined/>}
              placeholder="Ваше Имя"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item hasFeedback
                     validateStatus={validateField('password')}
                     help={!touched.password ? null : errors.password}
          >
            <Input.Password
              id="password"
              size="large"
              prefix={<LockOutlined/>}
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item hasFeedback
                     validateStatus={validateField('password_2')}
                     help={!touched.password_2 ? null : errors.password_2}
          >
            <Input.Password
              id="password_2"
              size="large"
              prefix={<LockOutlined/>}
              placeholder="Повторите пароль"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button disabled={isSubmitting}
                    onClick={handleSubmit}
                    type="primary"
                    size="large"
                    htmlType="submit"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/signin">Войти</Link>
        </Form>
      </Block>
    </>
  );
};

export default RegisterForm;
