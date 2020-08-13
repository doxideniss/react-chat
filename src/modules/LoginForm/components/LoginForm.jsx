import React from 'react';

import {Link} from 'react-router-dom';
import {Button, Block} from 'components';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const LoginForm = () => {
  return (
    <>
      <div className="auth__top">
        <h2>Водите в аккаунт</h2>
        <p>Пожалуйста, войдите в аккаунт</p>
      </div>
      <Block>
        <Form>
          <Form.Item name="username">
            <Input
              prefix={<UserOutlined/>}
              placeholder="Ваше имя"/>
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              prefix={<LockOutlined/>}
              placeholder="Пароль"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">Войти</Button>
          </Form.Item>
          <Link className="auth__register-link" to="/signup">Зарегистрироваться</Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
