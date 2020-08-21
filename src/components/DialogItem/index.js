import React from 'react';
import classNames from 'classnames';

import {Time, CheckIcon, Avatar} from 'components';

const DialogItem = ({user, isMe, created_at, text, isReaded, unreaded}) => {

  return (
    <div className={classNames('dialogs__item', {
      'dialogs__item--online': user.isOnline,
    })}>
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-block">
          <div className="dialogs__item-name">
            {user.name}
          </div>
          <div className="dialogs__item-date">
            <Time date={created_at}/>
          </div>
        </div>
        <div className="dialogs__item-block">
          <div className="dialogs__item-text">{text}</div>
          <div className="dialogs__item-status">
            <CheckIcon isMe={isMe} isReaded={isReaded}/>
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
