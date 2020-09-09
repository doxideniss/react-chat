import React from 'react';
import { Button, message, Upload } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const UploadFiles = () => {
  const beforeUpload = (file) => {
    if (!/png|jpe?g|gif|webp|bmp/.test(file.type)) {
      message.error(`${file.name} это не фото`);
    }
    return file.type === 'image/png';
  };

  const onChange = (info) => {
    console.log(info);
  };

  return (
    <Upload multiple showUploadList={false} beforeUpload={beforeUpload} onChange={onChange}>
      <Button className="chat-input__icon chat-input__camera-btn" type="text" shape="circle"
              icon={<CameraOutlined/>}/>
    </Upload>
  );
};

export default UploadFiles;
