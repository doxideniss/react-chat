import React from 'react';
import { Button, Empty, Spin } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";

import { Messages, ChatInput } from 'components';
import { fetchMessages } from "redux/reducers/messages";

import './chat.scss';

const Chat = () => {
  const dispatch = useDispatch();
  const { messages, currentDialogId, isLoading } = useSelector(state => ({
    messages: state.messages.items,
    currentDialogId: state.dialogs.currentDialogId,
    isLoading: state.messages.isLoading
  }));
  const messageEndRef = React.useRef(null);

  React.useEffect(() => {
    if (currentDialogId !== null) {
      dispatch(fetchMessages(currentDialogId));
    }
  }, [currentDialogId]);
  React.useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView();
    }
  }, [messages]);

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
              {isLoading ? (
                <Spin tip="Загрузка сообщений..." className="chat__center"/>
              ) : (
                <Messages messages={messages}/>
              )}
              <div ref={messageEndRef}/>
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
