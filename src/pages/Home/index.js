import React from 'react';
import { Input } from "antd";
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Dialogs, Message } from 'components';

import './home.scss';

const Home = () => {

  const items = [
    {
      "_id": "5f45487ea949203235dcfb90",
      "text": "Sint laborum incididunt duis veniam ullamco Lorem aute qui culpa laboris non nulla. Officia ad velit consectetur officia eiusmod proident sunt. Ullamco amet labore esse qui.",
      "isReaded": true,
      "created_at": "Sun Aug 23 2020 07:02:58 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487ee07cd6a2b0e02cec",
        "name": "Jacobson Walker",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487e304f54cda4eaca06",
      "text": "Ad officia in incididunt ut fugiat sunt. Excepteur tempor est adipisicing ea commodo ad qui deserunt consequat. Adipisicing tempor eiusmod minim enim ullamco elit fugiat ipsum voluptate ullamco.",
      "isReaded": true,
      "created_at": "Fri Aug 21 2020 00:13:29 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487eeac854044b5e95aa",
        "name": "Guerra Suarez",
        "avatar": null,
        "isOnline": true
      }
    },
    {
      "_id": "5f45487e7b5a138323854684",
      "text": "Anim dolor id ullamco eu nulla do fugiat pariatur magna pariatur. Laboris culpa ea qui aliquip incididunt minim officia. Do quis pariatur laborum exercitation velit culpa qui mollit nostrud voluptate consequat.",
      "isReaded": false,
      "created_at": "Thu Aug 20 2020 22:04:18 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487e0015d2db8295ad49",
        "name": "Wynn York",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487ea4d63ee17ebcd279",
      "text": "Est dolore ex ipsum deserunt reprehenderit. Qui cillum reprehenderit Lorem labore non ut id proident proident. Ut cupidatat proident eu non exercitation incididunt incididunt commodo proident dolor mollit ullamco.",
      "isReaded": true,
      "created_at": "Sat Aug 22 2020 05:49:01 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487e24e384a9ebfcb431",
        "name": "Casey Glover",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487eed94ebaca318f911",
      "text": "Reprehenderit reprehenderit eiusmod fugiat sit cillum Lorem do consequat magna ex. Exercitation Lorem pariatur nulla pariatur. Consequat voluptate incididunt officia velit id culpa aliqua eu excepteur Lorem eiusmod qui mollit ad.",
      "isReaded": true,
      "created_at": "Sat Aug 22 2020 23:31:08 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487eaf74e12a1051c783",
        "name": "Dorthy Chandler",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487e869d4f29aeeed02e",
      "text": "Magna consequat fugiat non do sit dolor commodo fugiat cupidatat non cillum et. Aliqua non enim elit in Lorem eiusmod eiusmod. Velit incididunt cupidatat do excepteur quis.",
      "isReaded": true,
      "created_at": "Sun Aug 23 2020 06:46:08 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487ee320c4d3f9b13e32",
        "name": "Burris Haney",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487e2d5675582d24585a",
      "text": "Velit velit consequat id magna id cillum magna do eiusmod fugiat adipisicing ut deserunt. Est nostrud magna esse esse culpa occaecat nulla exercitation Lorem. Excepteur tempor laborum sunt do consequat nostrud cupidatat laboris officia ut cillum esse.",
      "isReaded": false,
      "created_at": "Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487eac23dd9859a72470",
        "name": "Rhonda Gilmore",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487e48f02fbdeafd6ffa",
      "text": "Ullamco reprehenderit Lorem laborum excepteur laboris ea excepteur ad. Lorem nisi do aliquip elit. Sunt aute ullamco enim aliqua anim.",
      "isReaded": false,
      "created_at": "Thu Aug 20 2020 02:30:03 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487edf5a0470f41947be",
        "name": "Diana Sawyer",
        "avatar": null,
        "isOnline": true
      }
    },
    {
      "_id": "5f45487e7555eb0c34bf6074",
      "text": "Nostrud eiusmod labore velit id excepteur amet ex tempor magna qui magna commodo. Nulla amet laboris et exercitation tempor sit culpa. Incididunt reprehenderit tempor ex mollit aliquip dolore culpa.",
      "isReaded": false,
      "created_at": "Thu Aug 20 2020 23:10:53 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487e2aa3f85325d35c93",
        "name": "Tami Edwards",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487eb58643a616317e74",
      "text": "Quis fugiat sit est adipisicing voluptate eu amet in ipsum. Qui Lorem ipsum veniam nisi incididunt incididunt cupidatat et id nulla dolore ea. Esse proident commodo cillum fugiat ut.",
      "isReaded": false,
      "created_at": "Tue Aug 25 2020 05:49:13 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487e4ebc32cf914945a9",
        "name": "Lydia Horne",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487ea29ec9951456d796",
      "text": "Ullamco mollit elit deserunt sunt Lorem excepteur incididunt ad ipsum ex consectetur commodo velit enim. Ea est dolore laboris do. Culpa reprehenderit eu dolor fugiat laborum eiusmod commodo proident commodo labore mollit labore sunt.",
      "isReaded": false,
      "created_at": "Sat Aug 22 2020 17:19:12 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487e1853c34e2d8d97eb",
        "name": "Sykes Schneider",
        "avatar": null,
        "isOnline": false
      }
    },
    {
      "_id": "5f45487e118fb928ad0d18e2",
      "text": "Consequat pariatur in nostrud commodo laborum Lorem et ullamco occaecat. Culpa est culpa commodo laboris ex non mollit culpa ad. Anim eiusmod veniam minim veniam aliquip sint consequat laborum cupidatat in.",
      "isReaded": false,
      "created_at": "Sun Aug 23 2020 05:36:00 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487ee1e783138458392d",
        "name": "Vargas Melton",
        "avatar": null,
        "isOnline": true
      }
    },
    {
      "_id": "5f45487e201cfc01334afd0f",
      "text": "Aute nostrud est nostrud aliqua consectetur amet pariatur veniam ullamco. Deserunt et deserunt et laboris duis ex ullamco. Do occaecat excepteur est est est velit duis fugiat consectetur.",
      "isReaded": true,
      "created_at": "Sun Aug 23 2020 17:14:55 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487e0eea2e274743e55b",
        "name": "Inez Navarro",
        "avatar": null,
        "isOnline": true
      }
    },
    {
      "_id": "5f45487e32d188eab818a61c",
      "text": "Irure commodo aliquip adipisicing enim elit nulla cillum. Lorem deserunt elit pariatur in dolor labore anim fugiat ad. Ut sint enim ex sunt reprehenderit sunt cillum irure id.",
      "isReaded": false,
      "created_at": "Sun Aug 23 2020 08:43:43 GMT+0000 (UTC)",
      "user": {
        "_id": "5f45487efa17454f87144b7c",
        "name": "Luisa Nichols",
        "avatar": null,
        "isOnline": true
      }
    },
  ];

  const user = {
    fullname: 'Denys'
  };
  const user2 = {
    fullname: 'Alina'
  };

  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <TeamOutlined/>
            <p>Список диалогов</p>
            <FormOutlined/>
          </div>
          <div className="chat__sidebar-search">
            <Input.Search
              placeholder="Поиск среди контактов"
              onSearch={value => console.log(value)}
            />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs items={items} userId={3}/>
          </div>
          <div></div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <div className="chat__dialog-header-box">
              <div className="chat__dialog-name">Test</div>
              <div className="chat__dialog-online"><span>онлайн</span></div>
            </div>
            <div className="chat__dialog-options"><EllipsisOutlined style={{fontSize: '20px'}}/></div>
          </div>
          <div className="chat__dialog-messages">
            <Message
              avatar="https://sun1-22.userapi.com/c857228/v857228584/1b1a26/L2IpQTTJGss.jpg?ava=1"
              text="Hello Hel Hello Hello Hello "
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
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
              attachments={[
                {
                  filename: 'image.jpg',
                  url: 'https://source.unsplash.com/150x150/?random=1&nature,water'
                },
              ]}
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />
            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />
            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />
            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />
            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />

            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />

            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />

            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />
            <Message
              avatar="https://sun9-32.userapi.com/impf/c847216/v847216407/323f6/loyIAo2iKIg.jpg?size=50x0&quality=90&crop=148,148,1188,1188&sign=d7078f7ded069611b8568e1a5cb0cdba&ava=1"
              user={user}
              text="resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad resad v resad resad resad resad"
              date={'Sun Aug 23 2020 23:42:46 GMT+0000 (UTC)'}
            />

          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
