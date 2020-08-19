import React from 'react';

import {Message, DialogItem} from 'components';

import './home.scss';

const Home = () => {
  const user = {
    fullname: 'Denys'
  };
  const user2 = {
    fullname: 'Alina'
  };
  return (
    <section className="home">
      <DialogItem user={{
                    name: 'Alina',
                    avatar: "https://sun1-22.userapi.com/c857228/v857228584/1b1a26/L2IpQTTJGss.jpg?ava=1",
                    isOnline: true
                  }}
                  message={{
                    text: 'Привет Привет Привет Привет Приветbrbrbs Привет Привет Привет Привет Привет Привет Привет ',
                    isReaded: false,
                    isMe: false,
                    createdAt: new Date('2020-08-19 15:10:00'),
                  }}
                  unreaded={3000}
      />

      {/*<Dialogs items={[
        {
          user: {
            name: 'Alina',
            avatar: null,
            online: true
          },
          message: {
            text: 'Привет',
            isReaded: false,
            createdAt: new Date()
          }
        },
      ]}/>*/}

      {/*<Message
        avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
        text="Hello"
        date={new Date('2020-08-16 20:00:00')}
        user={user}
      />
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
