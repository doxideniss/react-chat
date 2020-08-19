import React from 'react';

import {Time} from 'components';

const DialogItem = ({ user, message}) => {
  return (
    <div className="dialogs__item">
      <div className="dialogs__item-avatar">
        <img src={user.avatar} alt={`${user.name} avatar`} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-top">
          <div className="dialogs__item-name">
            <b>{user.name}</b>
          </div>
          <div className="dialogs__item-date">
            <Time date={message.createdAt}/>
          </div>
        </div>
        <div className="dialogs__item-">

        </div>
      </div>
    </div>
  );
};

export default DialogItem;
