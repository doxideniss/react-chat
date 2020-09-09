import React from 'react';
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import { Message } from 'components';

const Messages = ({messages}) => {

  return (
    <>
      {messages && messages.length ? (
        orderBy(messages, (item) => (new Date(item.date)), ["asc"]).map(message => (
          <Message key={message._id} {...message} />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Сообщений нету" className="chat__center"/>
      )}
    </>
  );
};

export default Messages;
