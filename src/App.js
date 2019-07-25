import React from "react";
import "../src/App.css";
import Dashboard from "./Components/dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Progress from "./Components/Progress";
import OverallPerformance from "./Components/OverallPerformance";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ViewUser from "./Components/Users/ViewUser";
import ViewSubjects from "./Components/Subjects/ViewSubjects";
import ViewTopics from "./Components/Topics/ViewTopics";
import AddUser from "./Components/Users/AddUser";
import UpdateUser from "./Components/Users/UpdateUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/progress" component={Progress} />
          <Route path="/performance" component={OverallPerformance} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/update-user" component={UpdateUser} />
          <Route path="/view-user" component={ViewUser} />
          <Route path="/view-subject" component={ViewSubjects} />
          <Route path="/view-topic" component={ViewTopics} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
