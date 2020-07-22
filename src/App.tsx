import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ListOfCurriculum from './Components/ListOfCurriculum';
import Curriculum from './Components/Curriculum';
import Setting from './Components/Setting';

const App: React.ElementType = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={ListOfCurriculum} />
          <Route exact path="/curriculum/:id" component={Curriculum} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
