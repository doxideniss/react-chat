import React from 'react';
import { Button } from "antd";
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

import { Dialogs } from 'components';

import './sidebar.scss';

const SideBar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <TeamOutlined/>
        <p>Список диалогов</p>
        <Button type="text" icon={<FormOutlined/>}/>
      </div>
      <div className="sidebar__dialogs">
        <Dialogs/>
      </div>
    </div>
  );
};

export default SideBar;
