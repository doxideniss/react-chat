import React from 'react';
import {formatDistanceToNow} from 'date-fns';
import {ru as ruLocale} from 'date-fns/locale';

import './time.scss';

const Time = ({date}) => {
  return (
    <span className="time">{date && formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}</span>
  );
};

export default Time;
