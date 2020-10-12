import React from 'react';
import { Empty, Spin } from "antd";
import { useSelector } from "react-redux";

import { Messages, ChatInput, Status } from 'components';

import './chat.scss';

const Chat = () => {
  const { dialogUser, messages, currentDialog, isLoading } = useSelector(state => ({
    messages: state.messages.items,
    currentDialog: state.dialogs.currentDialog,
    dialogUser: state.dialogs.currentDialog ? (state.user.data._id === state.dialogs.currentDialog.author._id) ? state.dialogs.currentDialog.partner : state.dialogs.currentDialog.author : null,
    isLoading: state.messages.isLoading
  }));
  const messageEndRef = React.useRef(null);

  React.useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <div className="chat">
      {
        currentDialog ? (
          <>
            <Status fullName={dialogUser.fullName} online={dialogUser.isOnline}/>
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
