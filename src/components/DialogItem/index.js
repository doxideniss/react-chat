import React from 'react';
import classNames from 'classnames';
import { Link } from "react-router-dom";

import { Time, CheckIcon, Avatar } from 'components';

const DialogItem = ({ _id, lastMessage, isCurrentDialog, isMe }) => {

  return (
    <Link to={`/dialog/${_id}`}>
      <div className={classNames('dialogs__item', {
        'dialogs__item--online': lastMessage.user.isOnline,
        'dialogs__item--active': isCurrentDialog
      })}
      >
        <div className="dialogs__item-avatar">
          <Avatar user={lastMessage.user}/>
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-block">
            <div className="dialogs__item-name">
              {lastMessage.user.fullName}
            </div>
            <div className="dialogs__item-date">
              <Time date={lastMessage.createdAt}/>
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
    </Link>
  );
};

export default DialogItem;
