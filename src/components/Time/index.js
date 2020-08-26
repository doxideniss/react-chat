import React from 'react';
import PropTypes from 'prop-types';
import {formatDistanceToNow} from 'date-fns';
import {ru as ruLocale} from 'date-fns/locale';

import './time.scss';

const Time = ({date}) => {
  const formatDateToNow = formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale});
  const formatDate = date && (formatDateToNow === 'меньше минуты назад' ? 'Сейчас' : formatDateToNow );

  return (
    <span className="time">{formatDate}</span>
  );
};

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;
