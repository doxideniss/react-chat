import React from 'react';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

import './chatInput.scss';

const ChatInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="chat-input">
      <Button className="chat-input__icon" type="text" shape="circle" icon={<SmileOutlined/>}/>
      <Input placeholder="Введите текст сообщения…"
             bordered={false} onChange={(e) => setValue(e.target.value)}/>
      <Button className="chat-input__icon chat-input__camera-btn" type="text" shape="circle" icon={<CameraOutlined/>}/>
      {
        !value ? (
          <Button className="chat-input__icon" type="text" shape="circle" icon={<AudioOutlined/>}/>
        ) : (
          <Button className="chat-input__icon" type="text" shape="circle" icon={<SendOutlined/>}/>
        )
      }
    </div>
  );
};

export default ChatInput;
