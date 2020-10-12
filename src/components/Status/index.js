import React from 'react';
import { Button } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

const Status = ({ online, fullName }) => {
  return (
    <div className="chat__header">
      <div></div>
      <div className="chat__header-box">
        <div className="chat__name">{fullName}</div>
        <div className="chat__online">
          {online ? (
            <span>онлайн</span>
          ) : (
            <span>оффлайн</span>
          )}
        </div>
      </div>
      <div className="chat__options">
        <Button type="text" icon={
          <EllipsisOutlined style={{ fontSize: '20px' }}/>
        }/>
      </div>
    </div>
  );
};

export default Status;
