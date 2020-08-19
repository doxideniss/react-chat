import React from 'react';
import classNames from 'classnames';

import {Time, CheckIcon} from 'components';

import './dialogItem.scss';

const DialogItem = ({user, message, unreaded}) => {
  const getAvatar = avatar => {
    if (avatar) {
      return <img src={avatar} alt={`${user.name} avatar`}/>;
    } else {

    }
  };
  return (
    <div className={classNames('dialogs__item', {
      'dialogs__item--online': user.isOnline,
    })}>
      <div className="dialogs__item-avatar">
        { getAvatar(user.avatar) }
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-block">
          <div className="dialogs__item-name">
            {user.name}
          </div>
          <div className="dialogs__item-date">
            <Time date={message.createdAt}/>
          </div>
        </div>
        <div className="dialogs__item-block">
          <div className="dialogs__item-text">{message.text}</div>
          <div className="dialogs__item-status">
            <CheckIcon isMe={message.isMe} isReaded={message.isReaded}/>
            {
              unreaded > 0 && (
                <div className="dialogs__item-count">{unreaded}</div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
