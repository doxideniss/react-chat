import React from 'react';
import orderBy from 'lodash/orderBy';
import PropTypes from "prop-types";
import { Empty } from "antd";

import { DialogItem } from 'components';

import './dialogs.scss';

const Dialogs = ({ items, userId }) => {

  return (
    <div className="dialogs">
      {
        items && items.length ? (
          orderBy(items, (item) => (new Date(item.created_at)), ["desc"]).map(item => (
            <DialogItem key={item._id}
                        isMe={item.user._id === userId}
                        {...item}
            />
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Контактов нету"/>
        )

      }
    </div>
  );
};

Dialogs.propTypes = {
  userId: PropTypes.string,
  items: PropTypes.array
};

export default Dialogs;
