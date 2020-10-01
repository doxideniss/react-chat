import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { Row, Spin } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { Auth, Home, NoMatchPage } from 'pages'
import { fetchUserData } from "redux/reducers/user";

function App() {
  const dispatch = useDispatch();
  const { isAuth, token, appIsLoading } = useSelector(state => ({
    isAuth: state.user.isAuth,
    token: state.user.token,
    appIsLoading: false //state.app.isLoading
  }));

  React.useEffect(() => {
    if (token) {
      // dispatch(fetchUserData());
    }
  }, []);

  return (
    <div className="wrapper">
      {
        appIsLoading ? (
          <Row className="height-100" align="middle" justify="center">
            <Spin size="large"/>
          </Row>
        ) : (
          <Switch>
            <Route exact path={['/signup', '/signin', '/signup/verify']} render={() => (isAuth ? <Redirect to="/"/> : <Auth/>)}/>
            <Route exact path="/" render={() => (isAuth ? <Home/> : <Redirect to="/signin"/>)}/>
            <Route component={NoMatchPage}/>
          </Switch>
        )
      }

    </div>
  );
}

export default App;
