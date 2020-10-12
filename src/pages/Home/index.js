import React from 'react';
import { SideBar, Chat } from 'components';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import './home.scss';
import { fetchDialogs, setCurrentDialog } from "redux/reducers/dialogs";
import { fetchMessages } from "redux/reducers/messages";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchDialogs());
  }, []);

  React.useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchMessages(id));
    }
    dispatch(setCurrentDialog(id))
  }, [id]);

  return (
    <section className="home">
      <div className="home__container">
        <SideBar/>
        <Chat/>
      </div>
    </section>
  );
};

export default Home;
