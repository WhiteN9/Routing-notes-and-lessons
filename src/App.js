import React from 'react';
import {Link , Switch, Route} from "react-router-dom";

function Home() {
  return <h1>Welcome to the home page</h1>
}
function About() {
  return <h1>You are on the about page</h1>
}
function Contact() {
  return <h1>Please feel free to email us</h1>
}
function NoMatch() {
  return <h1>404 Not Found</h1>
}

function App () {
  return (
    // No need to add <Router>, it has been added to ./index.js
  <>
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route><NoMatch /></Route>
    </Switch>
  </>
    
  );
}

export default App;
