import React from 'react';

import {Button, Block} from 'components';
import {Form, Input} from "antd";
import {UserOutlined, MailOutlined, LockOutlined, InfoCircleTwoTone} from '@ant-design/icons';

const RegisterForm = () => {

  const successReg = true;

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        { successReg ? (
          <Form>
            <Form.Item name="email">
              <Input
                prefix={<MailOutlined/>}
                placeholder="Введите E-Mail"
              />
            </Form.Item>
            <Form.Item name="username">
              <Input
                prefix={<UserOutlined/>}
                placeholder="Ваше Имя"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined/>}
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined/>}
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">Зарегистрироваться</Button>
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
