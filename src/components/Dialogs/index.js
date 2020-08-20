import React from 'react';

import {DialogItem} from 'components';

import './dialogs.scss';

const Dialogs = ({items, userId}) => {

  return (
    <div className="dialogs">
      {
        items.map(item => (
          <DialogItem key={item._id}
                      user={item.lastMessage.user}
                      message={item.lastMessage}
                      unreaded={item.unreaded}
                      isMe={item.message.user._id === userId}
          />
        ))
      }
    </div>
  );
};

export default Dialogs;
