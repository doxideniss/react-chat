import React from 'react';

import {Dialogs, Message} from 'components';

import './home.scss';

const Home = () => {

  const items = [
    {
      _id: 1,
      text: 'Я ща стрепсилс тебе куплю, пройдет что то там',
      isReaded: false,
      created_at: new Date('2020-08-20 20:51:00'),
      user: {
        _id: 1,
        name: 'Jack the Ripper',
        avatar: "https://sun1-22.userapi.com/c857228/v857228584/1b1a26/L2IpQTTJGss.jpg?ava=1",
        isOnline: true
      },
      unreaded: 3
    },
    {
      _id: 2,
      text: 'Го в WhatsApp, я создал',
      isReaded: false,
      created_at: new Date(),
      user: {
        _id: 2,
        name: 'Ян Борисович Кум',
        avatar: "https://sun1-22.userapi.com/c857228/v857228584/1b1a26/L2IpQTTJGss.jpg?ava=1",
        isOnline: false
      },
      unreaded: 1
    },
    {
      _id: '3',
      text: 'Мы все свидетельствуем',
      isReaded: true,
      created_at: new Date('2020-08-19 15:10:00'),
      user: {
        _id: 'c3557ca22ada1ccafcc43f8013ef0251',
        name: 'Фёдор Достоевский',
        avatar: null,
        isOnline: false
      },
      unreaded: 0
    },
    {
      _id: 4,
      text: 'Есть дока на Энигму?',
      isReaded: false,
      created_at: new Date('2020-08-19 15:10:00'),
      user: {
        _id: 4,
        name: 'Алан Тьюринг',
        avatar: "https://sun1-22.userapi.com/c857228/v857228584/1b1a26/L2IpQTTJGss.jpg?ava=1",
        isOnline: true
      },
      unreaded: 0
    },
  ];

  const user = {
    fullname: 'Denys'
  };

  return (
    <section className="home">
      <Dialogs items={items} userId={3}/>
      <Message
        avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
        date={new Date('2020-08-16 20:00:00')}
        user={user}
        audio="https://notificationsounds.com/soundfiles/285e19f20beded7d215102b49d5c09a0/file-dreamy-christmas-bells.mp3"
      />
      {/*
      <Message
        avatar="https://sun1-22.userapi.com/c857228/v857228584/1b1a26/L2IpQTTJGss.jpg?ava=1"
        text="Hello Hel Hello Hello Hello "
        date={new Date('2020-08-16 20:10:00')}
        user={user2}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
          }
        ]}
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
        user={user}
        isTyping={true}
      />
      <Message
        avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
        user={user}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/150x150/?random=1&nature,water'
          },
        ]}
        date={new Date('2020-08-16 20:10:00')}
      />*/}
    </section>
  );
};

export default Home;
