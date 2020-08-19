import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {Time, CheckIcon} from 'components';

import './message.scss';

const Message = ({avatar, user, text, date, isMe, isReaded, isTyping, attachments}) => {
  return (
    <div className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--image': attachments && attachments.length === 1,
    })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}/>
      </div>
      <div className="message__content">
        <div className="message__text-info">
          {
            (text || isTyping) && (
              <div className="message__bubble">
                {
                  text && (
                    <p className="message__text">{text}</p>
                  )
                }
                {
                  isTyping && (
                    <div className="message__typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )
                }
              </div>
            )
          }
          <div className="message__attachments">
            {attachments && attachments.map(attachment => (
              <img className="message__attachments-item" src={attachment.url} alt={attachment.filename}/>
            ))
            }
          </div>
          <CheckIcon className="message__icon" isMe={isMe} isReaded={isReaded}/>
        </div>
        <Time date={date}/>
      </div>
    </div>
  );
};

Message.propTypes = {
  classNames: PropTypes.string,
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;
