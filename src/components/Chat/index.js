import React from 'react';
import { Button, Empty } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

import { Messages, ChatInput } from 'components';

import './chat.scss';

const Chat = ({messages, currentDialogId}) => {

  return (
    <div className="chat">
      {
        currentDialogId ? (
          <>
            <div className="chat__header">
              <div></div>
              <div className="chat__header-box">
                <div className="chat__name">Test</div>
                <div className="chat__online"><span>онлайн</span></div>
              </div>
              <div className="chat__options">
                <Button type="text" icon={
                  <EllipsisOutlined style={{ fontSize: '20px' }}/>
                }/>
              </div>
            </div>
            <div className="chat__messages">
              <Messages messages={messages}/>
            </div>
            <div className="chat__input">
              <ChatInput/>
            </div>
          </>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Откройте диалог" className="chat__empty"/>
        )
      }

    </div>
  );
};

export default Chat;
