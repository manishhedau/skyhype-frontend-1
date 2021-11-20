import React from "react";
import './App.css';


import ErrorPage from './components/Error_Page/error_page';
import Signup from './components/Login_Page/Signup';
import LoginPage from "./components/Login_Page/login_page";
import LandingPage from "./components/Landing_Page/landing_page";
import ProfilePage from './components/Profile_Page/profile_page';

import UserProfessionPage from "./components/User_Profession_Page/user_profession_page";
import InterestsPage from './components/Interests_Page/interests-page';
import ProfileDetails from "./components/Profile_Details/Profile_Details";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WaitingPage from "./components/Waiting_Page/Index";

import Dashboard from "../src/components/Dashboard/dashboard_main";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/dashboard/user/">
            <Dashboard />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/user/:userId">
            <ProfilePage />
          </Route>

          <Route path="/user-interests">
            <InterestsPage />
          </Route>

          <Route path="/user-details">
            <ProfileDetails />
          </Route>

          <Route path="/user-profession">
            <UserProfessionPage />
          </Route>

          <Route exact path="/waiting-page">
            <WaitingPage />
          </Route>

          <Route path="*" component={ErrorPage} />

        </Switch >
      </div >

    </Router>
  )
}
App.getInitialProps = ({ req }) => {
  // let userAgent;
  // if (req) {
  //   userAgent = req.headers["user-agent"];
  // } else {
  // }

};

export default App;
