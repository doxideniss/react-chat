import React from 'react';
import classNames from 'classnames';

import {Time, CheckIcon, Avatar} from 'components';

const DialogItem = ({_id, lastMessage, isCurrentDialog, isMe, onSelect}) => {

  const handleClick = () => {
    onSelect(_id);
  };

  return (
    <div className={classNames('dialogs__item', {
      'dialogs__item--online': lastMessage.user.isOnline,
      'dialogs__item--active': isCurrentDialog
    })}
         onClick={handleClick}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={lastMessage.user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-block">
          <div className="dialogs__item-name">
            {lastMessage.user.name}
          </div>
          <div className="dialogs__item-date">
            <Time date={lastMessage.created_at}/>
          </div>
        </div>
        <div className="dialogs__item-block">
          <div className="dialogs__item-text">{lastMessage.text}</div>
          <div className="dialogs__item-status">
            <CheckIcon isMe={isMe} isReaded={lastMessage.isReaded}/>
            {/* {
              unreaded > 0 && (
                <div className="dialogs__item-count">{unreaded}</div>
              )
            } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
