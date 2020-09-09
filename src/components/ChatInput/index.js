import React from 'react';
import { AudioOutlined, SendOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { UploadFiles, PickerEmoji } from 'components';

import './chatInput.scss';
import 'emoji-mart/css/emoji-mart.css'

const ChatInput = () => {
  const [value, setValue] = React.useState('');

  const handleChangeValue = (e) => setValue(e.target.value);
  const handlePickEmoji = ({ colons }) => {
    setValue(`${value} ${colons}`)
  };

  return (
    <div className="chat-input">
      <PickerEmoji onPickEmoji={handlePickEmoji}/>
      <Input placeholder="Введите текст сообщения…"
             bordered={false}
             onChange={handleChangeValue}
             value={value}
      />
      <UploadFiles/>
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
