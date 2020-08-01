import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ListOfCurriculum from './components/ListOfCurriculum';
import Curriculum from './components/Curriculum';
import Profile from './components/Profile';
import Setting from './components/Setting';
import ReactGA from 'react-ga';

const App: React.ElementType = () => {
  useEffect(() => {
    ReactGA.initialize('UA-173643032-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={ListOfCurriculum} />
          <Route exact path="/curriculum/:id" component={Curriculum} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Setting} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
