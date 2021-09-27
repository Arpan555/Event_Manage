import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home"
import AddEvent from "./Components/AddEvent";
import ShowEvent from "./Components/ShowEvent";
import ShowWeekEvent from "./Components/ShowWeekEvent"
import EditEvent from "./Components/EditEvent";
import EditWeek from "./Components/EditWeek"
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={AddEvent}/>
        <Route exact path="/edit" component={EditEvent}/>
        <Route exact path="/editweekevent" component={EditWeek} />
        <Route exact path="/showevent" component={ShowEvent}/>
        <Route exact path="/showweekevent" component={ShowWeekEvent}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
