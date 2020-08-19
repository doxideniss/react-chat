import React from 'react';
import {Route, Switch} from "react-router-dom";

import {Auth, Home} from 'pages'

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={['/signup', '/signin']} component={Auth}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
