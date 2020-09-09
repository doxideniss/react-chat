import React from 'react';
import { Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Picker } from "emoji-mart";

const PickerEmoji = ({ onPickEmoji }) => {
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const pickerRef = React.useRef();

  const toggleShowEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker)
  };

  const onSelect = (emoji) => {
    onPickEmoji(emoji)
  };

  const handleOutsideClick = (e) => {
    if (!pickerRef.current.contains(e.target)) {
      setShowEmojiPicker(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick)
  }, []);

  return (
    <div ref={pickerRef} >
      <div className="chat-input__picker">
        {showEmojiPicker && (
          <Picker onSelect={onSelect} set="apple"/>
        )}
      </div>
      <Button onClick={toggleShowEmojiPicker}
              className="chat-input__icon"
              type="text"
              shape="circle"
              icon={<SmileOutlined/>}/>
    </div>
  );
};

export default PickerEmoji;
