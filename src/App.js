import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home"
import AddEvent from "./Components/AddEvent";
import ShowEvent from "./Components/ShowEvent";
import EditEvent from "./Components/EditEvent";
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={AddEvent}/>
        <Route exact path="/edit" component={EditEvent}/>
        <Route exact path="/showevent" component={ShowEvent}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
