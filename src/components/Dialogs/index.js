import React from 'react';
import orderBy from 'lodash/orderBy';

import {DialogItem} from 'components';

import './dialogs.scss';

const Dialogs = ({items, userId}) => {

  return (
    <div className="dialogs">
      {
        orderBy(items, (item) => (new Date(item.created_at)),["desc"]).map(item => (
          <DialogItem key={item._id}
                      isMe={item.user._id === userId}
                      {...item}
          />
        ))
      }
    </div>
  );
};

export default Dialogs;
