import React from 'react';
import { SideBar, Chat } from 'components';

import './home.scss';

const Home = () => {


  return (
    <section className="home">
      <div className="home__container">
        <SideBar/>
        <Chat messages={[]}/>
      </div>
    </section>
  );
};

export default Home;
