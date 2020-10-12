import React from 'react';
import orderBy from 'lodash/orderBy';
import { Empty, Input, Spin } from "antd";
import { useSelector } from "react-redux";

import { DialogItem } from 'components';

import './dialogs.scss';

const Dialogs = () => {
  const { userId, dialogs, currentDialog, isLoading } = useSelector(state => ({
    dialogs: state.dialogs.items,
    userId: state.user._id,
    currentDialog: state.dialogs.currentDialog,
    isLoading: state.dialogs.isLoading,
  }));
  const [inputValue, setInputValue] = React.useState('');
  const [filterDialogs, setFilterDialogs] = React.useState([]);

  React.useEffect(() => {
      dialogs.length && setFilterDialogs(dialogs)
  }, [dialogs]);

  const onSearch = (e) => {
    const value = e.target.value;
    setFilterDialogs(
      dialogs.filter(dialog => dialog.lastMessage.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0),
    );
    setInputValue(e.target.value);
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
          isLoading ? (
            <Spin tip="Загрузка контактов..."/>
          ) : (
            filterDialogs && filterDialogs.length ? (
              orderBy(filterDialogs, (item) => (new Date(item.lastMessage.createdAt)), ["desc"]).map(dialog => (
                <DialogItem key={dialog._id}
                            isMe={dialog.lastMessage.user._id === userId}
                            isCurrentDialog={currentDialog ? currentDialog._id === dialog._id : false}
                            {...dialog}
                />
              ))
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Контактов нету"/>
            )
          )
        }
      </div>
    </div>
  );
};

export default Dialogs;
