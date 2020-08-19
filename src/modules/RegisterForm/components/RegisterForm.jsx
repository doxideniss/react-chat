import React from 'react';

import {Button, Block} from 'components';
import {Alert, Form, Input} from "antd";
import {UserOutlined, MailOutlined, LockOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {validateFields} from "utils/helpers";

const RegisterForm = (props) => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = props;

  const validateField = validateFields(errors, touched);

  const successReg = true;

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        { successReg ? (
          <Form onSubmit={handleSubmit}>
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
                id="username"
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
            {
              !isValid && (
                <Form.Item>
                <Alert
                  description="Ошибка"
                  type="error"
                  showIcon
                />
                </Form.Item>
              )
            }
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" size="large">Зарегистрироваться</Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <InfoCircleTwoTone style={{ fontSize: '40px', marginBottom: '10px'}} />
            <h3>Подтвердите свой аккаунт</h3>
            <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
          </div>
        )}
      </Block>
    </>
  );
};

export default RegisterForm;
