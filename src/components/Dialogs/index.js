import React from 'react';
import orderBy from 'lodash/orderBy';
import { Empty, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { DialogItem } from 'components';
import { fetchDialogs, setCurrentDialog } from "redux/reducers/dialogs";

import './dialogs.scss';

const Dialogs = ({ userId }) => {
  const dispatch = useDispatch();
  const {dialogs, currentDialog} = useSelector(state => ({
    dialogs: state.dialogs.items,
    currentDialog: state.dialogs.currentDialog,
  }));
  const [inputValue, setInputValue] = React.useState('');
  const [filterDialogs, setFilterDialogs] = React.useState([]);

  React.useEffect(() => {
    if (!dialogs.length) {
      dispatch(fetchDialogs());
    } else {
      setFilterDialogs(dialogs);
    }
  }, [dialogs]);

  const onSearch = (e) => {
    const value = e.target.value;
    setFilterDialogs(dialogs.filter(dialog => dialog.user.name.toUpperCase().indexOf(value.toUpperCase()) >= 0));
    setInputValue(e.target.value);
  };

  const onSelectDialog = (id) => {
    dispatch(setCurrentDialog(id));
  };

  return (
    <div className="dialogs">
      <div className="dialogs__search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={onSearch}
          value={inputValue}
        />
      </div>
      <div className="dialogs__items">
        {
          filterDialogs && filterDialogs.length ? (
            orderBy(filterDialogs, (item) => (new Date(item.created_at)), ["desc"]).map(dialog => (
              <DialogItem key={dialog._id}
                          isMe={dialog.user._id === userId}
                          isCurrentDialog={currentDialog === dialog._id}
                          onSelect={onSelectDialog}
                          {...dialog}
              />
            ))
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Контактов нету"/>
          )

        }
      </div>
    </div>
  );
};

export default Dialogs;
