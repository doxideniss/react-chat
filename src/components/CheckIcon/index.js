import React from 'react';
import classNames from 'classnames';

import readedSVG from 'assets/img/readed.svg';
import noReadedSVG from 'assets/img/noreaded.svg';

const CheckIcon = ({isMe, className, isReaded}) => {
  return (
    isMe ? (
      <img className={classNames(className)}
           src={isReaded ? readedSVG : noReadedSVG}
           alt="Readed icon"/>
    ) : null
  );
};

export default CheckIcon;
