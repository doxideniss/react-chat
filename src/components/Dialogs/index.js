import React from 'react';
import orderBy from 'lodash/orderBy';
import { Empty, Input, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { DialogItem } from 'components';
import { fetchDialogs, setCurrentDialog } from "redux/reducers/dialogs";

import './dialogs.scss';

const Dialogs = () => {
  const dispatch = useDispatch();
  const { userId, dialogs, currentDialogId, isLoading } = useSelector(state => ({
    dialogs: state.dialogs.items,
    userId: state.user._id,
    currentDialogId: state.dialogs.currentDialogId,
    isLoading: state.dialogs.isLoading,
  }));
  const [inputValue, setInputValue] = React.useState('');
  const [filterDialogs, setFilterDialogs] = React.useState([]);

  // React.useEffect(() => {
  //   if (!dialogs.length) {
  //     dispatch(fetchDialogs());
  //   } else {
  //     setFilterDialogs(dialogs);
  //   }
  // }, [dialogs]);

  const onSearch = (e) => {
    const value = e.target.value;
    setFilterDialogs(
      dialogs.filter(dialog => dialog.lastMessage.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0),
    );
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
          isLoading ? (
            <Spin tip="Загрузка контактов..."/>
          ) : (
            filterDialogs && filterDialogs.length ? (
              orderBy(filterDialogs, (item) => (new Date(item.lastMessage.created_at)), ["desc"]).map(dialog => (
                <DialogItem key={dialog._id}
                            isMe={dialog.lastMessage.user._id === userId}
                            isCurrentDialog={currentDialogId === dialog._id}
                            onSelect={onSelectDialog}
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
