import React from 'react';
import { Button, Empty } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

import { Messages, ChatInput } from 'components';

import './chat.scss';

const items = [
  {
    "_id": "5f4667c0ddd02568a873a728",
    "text": "Nostrud sunt do consequat eu voluptate laboris proident sunt commodo duis exercitation.",
    "user": {
      "_id": "5f4667c03a420dd9442ea9f3",
      "avatar": null,
      "name": "Phelps Sharp"
    },
    "date": "Tue Aug 25 2020 21:41:13 GMT+0000 (UTC)",
    "isMe": true,
    "isReaded": true
  },
  {
    "_id": "5f4667c05d9e545b8fd4d0fc",
    "text": "Consequat sint commodo est occaecat incididunt minim excepteur eu est ea laboris consequat amet.",
    "user": {
      "_id": "5f4667c033ec904abd8a429a",
      "avatar": null,
      "name": "Elise Daniel"
    },
    "date": "Sun Aug 23 2020 21:18:41 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": true
  },
  {
    "_id": "5f4667c0d3f2726635ab825b",
    "text": "Do id laboris proident irure excepteur eiusmod tempor ea non laborum duis occaecat.",
    "user": {
      "_id": "5f4667c061b832b1fb614c4d",
      "avatar": null,
      "name": "Cathy Roberts"
    },
    "date": "Wed Aug 26 2020 12:12:24 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": true
  },
  {
    "_id": "5f4667c0654b6f4e2446c825",
    "text": "Fugiat aliquip ex nostrud duis officia ipsum nisi.",
    "user": {
      "_id": "5f4667c017e0e6b38280a6f8",
      "avatar": null,
      "name": "Fowler Hurst"
    },
    "date": "Tue Aug 25 2020 10:23:35 GMT+0000 (UTC)",
    "isMe": true,
    "isReaded": true
  },
  {
    "_id": "5f4667c078635844655bc56b",
    "text": "Consectetur tempor minim nostrud esse excepteur elit.",
    "user": {
      "_id": "5f4667c0b3f7949f59bb5a72",
      "avatar": null,
      "name": "Katy Andrews"
    },
    "date": "Tue Aug 25 2020 17:50:06 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": false
  },
  {
    "_id": "5f4667c0f0c0e16771083629",
    "text": "Magna elit sunt aliqua aliquip.",
    "user": {
      "_id": "5f4667c0b16f9c7804e81e27",
      "avatar": null,
      "name": "Simon Castro"
    },
    "date": "Tue Aug 25 2020 15:53:56 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": false
  },
  {
    "_id": "5f4667c0c410cbaab0f9e0e2",
    "text": "Mollit ad ad irure consectetur do excepteur cupidatat ipsum proident eiusmod voluptate proident magna.",
    "user": {
      "_id": "5f4667c01dc20ef108cb316a",
      "avatar": null,
      "name": "Williams Garza"
    },
    "date": "Sat Aug 22 2020 02:06:06 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": true
  },
  {
    "_id": "5f4667c0eefda97f3c01949d",
    "text": "Enim incididunt consectetur qui velit minim pariatur esse tempor ex ipsum non excepteur excepteur.",
    "user": {
      "_id": "5f4667c0739d987ba4c71bfe",
      "avatar": null,
      "name": "Hope Riggs"
    },
    "date": "Sat Aug 22 2020 04:03:01 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": false
  },
  {
    "_id": "5f4667c0b4e40b071f6ba148",
    "text": "Exercitation laboris quis aliqua eiusmod officia occaecat esse laborum cupidatat laborum velit nulla.",
    "user": {
      "_id": "5f4667c07656e781f8122df9",
      "avatar": null,
      "name": "Josie Logan"
    },
    "date": "Sat Aug 22 2020 08:58:17 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": false
  },
  {
    "_id": "5f4667c04ffb5ae53863fd99",
    "text": "Adipisicing eiusmod mollit excepteur duis fugiat irure consectetur sit veniam in.",
    "user": {
      "_id": "5f4667c0b054ac6b0d52392a",
      "avatar": null,
      "name": "Graves Kennedy"
    },
    "date": "Thu Aug 20 2020 14:24:30 GMT+0000 (UTC)",
    "isMe": false,
    "isReaded": false
  }
];

const Chat = ({currentDialogId}) => {

  return (
    <div className="chat">
      {
        currentDialogId ? (
          <>
            <div className="chat__header">
              <div></div>
              <div className="chat__header-box">
                <div className="chat__name">Test</div>
                <div className="chat__online"><span>онлайн</span></div>
              </div>
              <div className="chat__options">
                <Button type="text" icon={
                  <EllipsisOutlined style={{ fontSize: '20px' }}/>
                }/>
              </div>
            </div>
            <div className="chat__messages">
              <Messages items={items}/>
            </div>
            <div className="chat__input">
              <ChatInput/>
            </div>
          </>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Откройте диалог" className="chat__empty"/>
        )
      }

    </div>
  );
};

export default Chat;
