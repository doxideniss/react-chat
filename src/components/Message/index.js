import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, CheckIcon, MessageAudio, Avatar } from 'components';

import './message.scss';

const Message = ({user, text, createdAt, audio, isMe, isReaded, isTyping, attachments}) => {
  console.log(isMe);
  return (
    <div className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--audio': audio,
      'message--image': attachments && attachments.length === 1,
    })}>
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__content">
        <div className="message__text-info">
          {
            (audio || text || isTyping) && (
              <div className="message__bubble">
                {text && (
                  <p className="message__text">{text}</p>
                )}
                {isTyping && (
                  <div className="message__typing">
                    <span/>
                    <span/>
                    <span/>
                  </div>
                )}
                {audio && (
                  <MessageAudio audio={audio}/>
                )}
              </div>
            )
          }

          {attachments &&
          <div className="message__attachments">
            {attachments.map(attachment => (
              <img className="message__attachments-item" src={attachment.url} alt={attachment.filename}/>
            ))}
          </div>
          }
          <CheckIcon className="message__icon" isMe={isMe} isReaded={isReaded}/>
        </div>
        <Time date={createdAt}/>
      </div>
    </div>
  );
};

Message.propTypes = {
  classNames: PropTypes.string,
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.string,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;
