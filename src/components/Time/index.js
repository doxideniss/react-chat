import React from 'react';
import PropTypes from 'prop-types';
import {formatDistanceToNow} from 'date-fns';
import {ru as ruLocale} from 'date-fns/locale';

import './time.scss';

const Time = ({date}) => {
  return (
    <span className="time">{date && formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}</span>
  );
};

Time.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default Time;
