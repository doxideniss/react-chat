import React from 'react';
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import { Message } from 'components';

const Messages = ({items}) => {

  return (
    <>
      {items && items.length ? (
        orderBy(items, (item) => (new Date(item.date)), ["asc"]).map(message => (
          <Message key={message._id} {...message} />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Сообщений нету" className="chat__empty"/>
      )}
    </>
  );
};

export default Messages;
